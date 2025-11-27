import { useState, createContext, useContext, ReactNode } from "react";
import { motion } from "motion/react";
import { Heart, MessageCircle, Share2, X, Send, ChevronDown, ChevronUp } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface RoomComment {
  id: string;
  roomId: string;
  author: string;
  text: string;
  timestamp: string;
}

interface RoomFavorite {
  roomId: string;
  count: number;
}

// Create context for sharing statistics
interface StatsContextType {
  favorites: RoomFavorite[];
  comments: RoomComment[];
  rooms: Array<{ id: string; name: string }>;
  setFavorites: React.Dispatch<React.SetStateAction<RoomFavorite[]>>;
  setComments: React.Dispatch<React.SetStateAction<RoomComment[]>>;
  handleDrop: (actionType: "favorite" | "comment" | "share", roomId: string) => void;
}

const StatsContext = createContext<StatsContextType | null>(null);

export function useRoomStats() {
  const context = useContext(StatsContext);
  if (!context) {
    return { favorites: [], comments: [], rooms: [] };
  }
  return context;
}

// Separate component for the statistics panel that can be placed anywhere
export function RoomStatisticsPanel() {
  const { rooms, favorites, comments } = useRoomStats();
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsStatsOpen(!isStatsOpen)}
        className="w-full py-4 px-6 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-200"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
          </div>
          <h3 className="text-gray-900">Room Statistics</h3>
          {(favorites.length > 0 || comments.length > 0) && (
            <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-full">
              {favorites.length + comments.length} interactions
            </span>
          )}
        </div>
        {isStatsOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* Collapsible Content */}
      {isStatsOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="p-6 space-y-6"
        >
          {/* Favorites Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <span className="text-gray-900">Most Favorited</span>
            </div>
            {favorites.length > 0 ? (
              <div className="space-y-2">
                {favorites
                  .sort((a, b) => b.count - a.count)
                  .map(fav => {
                    const room = rooms.find(r => r.id === fav.roomId);
                    return (
                      <div key={fav.roomId} className="flex justify-between items-center bg-red-50 px-3 py-2 rounded-lg">
                        <span className="text-gray-800 text-sm">{room?.name}</span>
                        <span className="text-red-600">{fav.count} ❤️</span>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <p className="text-xs text-gray-500 italic">No favorites yet. Drag the red circle onto rooms!</p>
            )}
          </div>

          {/* Comments Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-900">Recent Comments</span>
            </div>
            {comments.length > 0 ? (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {comments.slice(-5).reverse().map(comment => {
                  const room = rooms.find(r => r.id === comment.roomId);
                  return (
                    <div key={comment.id} className="bg-green-50 px-3 py-2 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-900 text-sm">{room?.name}</span>
                        <span className="text-gray-500 text-xs">{comment.timestamp}</span>
                      </div>
                      <p className="text-gray-700 text-xs italic">"{comment.text}"</p>
                      <p className="text-gray-500 text-xs mt-1">- {comment.author}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-gray-500 italic">No comments yet. Drag the green circle onto rooms!</p>
            )}
          </div>

          {/* Instructions */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-600 text-center">
              💡 <strong>Tip:</strong> Drag the colored circles from the left onto any room to interact!
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

interface DraggableActionCirclesProps {
  rooms: Array<{ id: string; name: string }>;
  onAction?: (action: string, roomId: string) => void;
  children?: ReactNode;
}

export function DraggableActionCircles({ rooms, onAction, children }: DraggableActionCirclesProps) {
  const [favorites, setFavorites] = useState<RoomFavorite[]>([]);
  const [comments, setComments] = useState<RoomComment[]>([]);
  
  // Dialog states
  const [showCommentDialog, setShowCommentDialog] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string>("");
  const [selectedRoomName, setSelectedRoomName] = useState<string>("");
  
  // Form states
  const [newComment, setNewComment] = useState("");
  const [friendId, setFriendId] = useState("");

  // Handle drop events
  const handleDrop = (actionType: "favorite" | "comment" | "share", roomId: string) => {
    const room = rooms.find(r => r.id === roomId);
    if (!room) return;

    setSelectedRoomId(roomId);
    setSelectedRoomName(room.name);

    if (actionType === "favorite") {
      handleAddFavorite(roomId);
    } else if (actionType === "comment") {
      setShowCommentDialog(true);
    } else if (actionType === "share") {
      setShowShareDialog(true);
    }

    if (onAction) {
      onAction(actionType, roomId);
    }
  };

  const handleAddFavorite = (roomId: string) => {
    setFavorites(prev => {
      const existing = prev.find(f => f.roomId === roomId);
      if (existing) {
        return prev.map(f => 
          f.roomId === roomId ? { ...f, count: f.count + 1 } : f
        );
      } else {
        return [...prev, { roomId, count: 1 }];
      }
    });
  };

  const handleAddComment = () => {
    if (newComment.trim() && selectedRoomId) {
      const comment: RoomComment = {
        id: Date.now().toString(),
        roomId: selectedRoomId,
        author: "You",
        text: newComment,
        timestamp: new Date().toLocaleTimeString()
      };
      setComments([...comments, comment]);
      setNewComment("");
      setShowCommentDialog(false);
    }
  };

  const handleShare = () => {
    if (friendId.trim() && selectedRoomId) {
      alert(`Room "${selectedRoomName}" has been shared with user: ${friendId}`);
      setFriendId("");
      setShowShareDialog(false);
    }
  };

  const getRoomComments = (roomId: string) => {
    return comments.filter(c => c.roomId === roomId);
  };

  return (
    <StatsContext.Provider value={{ favorites, comments, rooms, setFavorites, setComments, handleDrop }}>
      {/* Fixed Action Circles Container */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
        {/* Red Circle - Favorites */}
        <motion.div
          drag
          dragMomentum={false}
          dragElastic={0.2}
          dragSnapToOrigin={true}
          onDragEnd={(event, info) => {
            // Check if dropped on a room (handled by room components)
            const elements = document.elementsFromPoint(info.point.x, info.point.y);
            const roomElement = elements.find(el => el.hasAttribute('data-room-id'));
            if (roomElement) {
              const roomId = roomElement.getAttribute('data-room-id');
              if (roomId) handleDrop("favorite", roomId);
            }
          }}
          className="relative group cursor-grab active:cursor-grabbing"
          whileHover={{ scale: 1.1 }}
          whileDrag={{ scale: 1.2 }}
        >
          <div className="w-16 h-16 rounded-full bg-red-500 shadow-xl flex items-center justify-center">
            <Heart className="w-8 h-8 text-white fill-white" />
          </div>
          <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Drag to favorite
          </div>
        </motion.div>

        {/* Green Circle - Comments */}
        <motion.div
          drag
          dragMomentum={false}
          dragElastic={0.2}
          dragSnapToOrigin={true}
          onDragEnd={(event, info) => {
            const elements = document.elementsFromPoint(info.point.x, info.point.y);
            const roomElement = elements.find(el => el.hasAttribute('data-room-id'));
            if (roomElement) {
              const roomId = roomElement.getAttribute('data-room-id');
              if (roomId) handleDrop("comment", roomId);
            }
          }}
          className="relative group cursor-grab active:cursor-grabbing"
          whileHover={{ scale: 1.1 }}
          whileDrag={{ scale: 1.2 }}
        >
          <div className="w-16 h-16 rounded-full bg-green-500 shadow-xl flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-white fill-white" />
          </div>
          <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Drag to comment
          </div>
        </motion.div>

        {/* Blue Circle - Share */}
        <motion.div
          drag
          dragMomentum={false}
          dragElastic={0.2}
          dragSnapToOrigin={true}
          onDragEnd={(event, info) => {
            const elements = document.elementsFromPoint(info.point.x, info.point.y);
            const roomElement = elements.find(el => el.hasAttribute('data-room-id'));
            if (roomElement) {
              const roomId = roomElement.getAttribute('data-room-id');
              if (roomId) handleDrop("share", roomId);
            }
          }}
          className="relative group cursor-grab active:cursor-grabbing"
          whileHover={{ scale: 1.1 }}
          whileDrag={{ scale: 1.2 }}
        >
          <div className="w-16 h-16 rounded-full bg-blue-500 shadow-xl flex items-center justify-center">
            <Share2 className="w-8 h-8 text-white fill-white" />
          </div>
          <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Drag to share
          </div>
        </motion.div>
      </div>

      {/* Comment Dialog */}
      <Dialog open={showCommentDialog} onOpenChange={setShowCommentDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Add Comment to {selectedRoomName}</DialogTitle>
            <DialogDescription>
              Share your thoughts and feedback about this room
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="comment">Your Comment</Label>
              <Textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts about this room..."
                className="min-h-[100px] mt-2"
              />
            </div>
            
            {/* Show existing comments */}
            {getRoomComments(selectedRoomId).length > 0 && (
              <div className="border-t pt-4">
                <h4 className="text-sm text-gray-700 mb-2">Previous Comments:</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {getRoomComments(selectedRoomId).map(comment => (
                    <div key={comment.id} className="bg-gray-50 p-2 rounded text-sm">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-900">{comment.author}</span>
                        <span className="text-gray-500 text-xs">{comment.timestamp}</span>
                      </div>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setShowCommentDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddComment} className="bg-green-500 hover:bg-green-600">
              <Send className="w-4 h-4 mr-2" />
              Add Comment
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Share Dialog */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Share {selectedRoomName}</DialogTitle>
            <DialogDescription>
              Send room information to a friend or colleague
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="friendId">Friend's ID or Email</Label>
              <Input
                id="friendId"
                value={friendId}
                onChange={(e) => setFriendId(e.target.value)}
                placeholder="Enter friend's ID or email"
                className="mt-2"
              />
            </div>
            <p className="text-sm text-gray-600">
              Your friend will receive information about this room and can view the floor plan.
            </p>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setShowShareDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleShare} className="bg-blue-500 hover:bg-blue-600">
              <Share2 className="w-4 h-4 mr-2" />
              Share Room
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Render children with context */}
      {children}
    </StatsContext.Provider>
  );
}
