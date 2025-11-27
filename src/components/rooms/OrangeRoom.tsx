import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Users, Clock, Plus, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DraggableActionCircles, RoomStatisticsPanel } from "../DraggableActionCircles";

interface OrangeRoomProps { onBack: () => void; }
interface Event { id: string; title: string; time: string; attendees: number; date: string; room: string; }
interface Room { id: string; name: string; x: string; y: string; width: string; height: string; color: string; }

export function OrangeRoom({ onBack }: OrangeRoomProps) {
  const [events, setEvents] = useState<Event[]>([
    { id: "1", title: "Innovation Lab", time: "09:30 - 12:00", attendees: 12, date: "Nov 17, 2025", room: "lab" },
    { id: "2", title: "Product Demo", time: "14:30 - 16:00", attendees: 18, date: "Nov 18, 2025", room: "demo" }
  ]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", time: "", attendees: "", date: "" });

  const rooms: Room[] = [
    { id: "lab", name: "Innovation Lab", x: "8%", y: "12%", width: "42%", height: "38%", color: "#FFDFBA" },
    { id: "demo", name: "Demo Area", x: "54%", y: "12%", width: "38%", height: "38%", color: "#FFE9CE" },
    { id: "collab", name: "Collaboration", x: "8%", y: "54%", width: "30%", height: "38%", color: "#FFF0D8" },
    { id: "tech", name: "Tech Space", x: "42%", y: "54%", width: "25%", height: "38%", color: "#FFEAC2" },
    { id: "storage", name: "Equipment", x: "71%", y: "54%", width: "21%", height: "38%", color: "#FFE5B8" }
  ];

  const handleAddEvent = () => {
    if (selectedRoom && newEvent.title && newEvent.time && newEvent.date) {
      setEvents([...events, { id: Date.now().toString(), title: newEvent.title, time: newEvent.time, attendees: parseInt(newEvent.attendees) || 0, date: newEvent.date, room: selectedRoom.id }]);
      setNewEvent({ title: "", time: "", attendees: "", date: "" });
      setIsAddEventOpen(false);
    }
  };

  const getRoomEvents = (roomId: string) => events.filter(event => event.room === roomId);
  const handleDeleteEvent = (eventId: string) => setEvents(events.filter(event => event.id !== eventId));

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="flex items-center gap-2 text-orange-700 hover:text-orange-900 transition-colors"><ArrowLeft className="w-5 h-5" /><span>Back to Floor Plan</span></button>
          <div className="px-6 py-2 bg-orange-600 text-white rounded-full">Orange Floor</div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-orange-900 mb-6">Interactive Floor Plan</h2>
            <p className="text-orange-700 text-sm mb-4">Click on any room to view or add events</p>
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 relative border-4 border-orange-600">
              {rooms.map((room) => {
                const roomEvents = getRoomEvents(room.id);
                return (
                  <motion.button key={room.id} onClick={() => setSelectedRoom(room)} whileHover={{ scale: 1.02 }} className="absolute border-2 border-orange-700 rounded-lg hover:border-orange-900 hover:shadow-lg group" style={{ left: room.x, top: room.y, width: room.width, height: room.height, backgroundColor: room.color }}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                      <span className="text-orange-900 text-sm text-center group-hover:scale-110 transition-transform">{room.name}</span>
                      {roomEvents.length > 0 && <span className="mt-1 px-2 py-0.5 bg-orange-700 text-white text-xs rounded-full">{roomEvents.length} {roomEvents.length === 1 ? 'event' : 'events'}</span>}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-orange-800 rounded" />
                  </motion.button>
                );
              })}
            </div>
            <div className="mt-4 text-sm text-orange-700"><p>Total Floor Area: 420 m² | Floor: 2nd Floor</p></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            {selectedRoom ? (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-orange-900">{selectedRoom.name}</h3>
                  <Button onClick={() => setIsAddEventOpen(true)} size="sm" className="bg-orange-600 hover:bg-orange-700"><Plus className="w-4 h-4 mr-1" />Add Event</Button>
                </div>
                <div className="border-t border-orange-200 pt-4">
                  <div className="flex items-center gap-2 mb-3"><Calendar className="w-4 h-4 text-orange-600" /><h4 className="text-orange-900">Scheduled Events</h4></div>
                  {getRoomEvents(selectedRoom.id).length > 0 ? (
                    <div className="space-y-3 max-h-[400px] overflow-y-auto">
                      {getRoomEvents(selectedRoom.id).map((event) => (
                        <div key={event.id} className="p-3 bg-orange-50 rounded-lg border-l-3 border-orange-600 relative group">
                          <button onClick={() => handleDeleteEvent(event.id)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"><X className="w-4 h-4 text-red-600 hover:text-red-800" /></button>
                          <h5 className="text-orange-900 text-sm mb-2 pr-6">{event.title}</h5>
                          <div className="space-y-1 text-xs text-orange-700">
                            <div className="flex items-center gap-1"><Clock className="w-3 h-3" />{event.time}</div>
                            <div className="flex items-center gap-1"><Users className="w-3 h-3" />{event.attendees} attendees</div>
                            <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{event.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : <p className="text-orange-600 text-sm">No events scheduled</p>}
                </div>
              </div>
            ) : <div className="bg-white rounded-2xl shadow-xl p-6"><p className="text-orange-700 text-center">Select a room to view details and events</p></div>}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-orange-900 mb-3">All Events ({events.length})</h3>
              <div className="space-y-2 max-h-[200px] overflow-y-auto">
                {events.map((event) => (
                  <div key={event.id} className="text-sm p-2 bg-orange-50 rounded">
                    <p className="text-orange-900">{event.title}</p>
                    <p className="text-orange-600 text-xs">{rooms.find(r => r.id === event.room)?.name} - {event.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
        <DialogContent className="bg-white">
          <DialogHeader><DialogTitle>Add Event to {selectedRoom?.name}</DialogTitle><DialogDescription>Schedule a new event in this room</DialogDescription></DialogHeader>
          <div className="space-y-4 py-4">
            <div><Label htmlFor="title">Event Title</Label><Input id="title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} placeholder="e.g., Team Meeting" /></div>
            <div><Label htmlFor="time">Time</Label><Input id="time" value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} placeholder="e.g., 14:00 - 16:00" /></div>
            <div><Label htmlFor="date">Date</Label><Input id="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} placeholder="e.g., Nov 20, 2025" /></div>
            <div><Label htmlFor="attendees">Number of Attendees</Label><Input id="attendees" type="number" value={newEvent.attendees} onChange={(e) => setNewEvent({ ...newEvent, attendees: e.target.value })} placeholder="e.g., 10" /></div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setIsAddEventOpen(false)}>Cancel</Button>
            <Button onClick={handleAddEvent} className="bg-orange-600 hover:bg-orange-700">Add Event</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}