import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { User, Mail, Globe, Instagram, Linkedin, MessageSquare } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";
import teamMember1 from "figma:asset/4bccd4e84e4429b18593e6d60cbcdd3a8f6a93e5.png";

const teamImages = [
  teamMember1,
  null,
  null,
  null,
  null,
];

export function ProjectCTA() {
  const { t } = useLanguage();
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedbackForm.message.trim()) {
      toast.error("Please enter your feedback message");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(t.feedback.successMessage);
    setFeedbackForm({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };
  
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Team Section Header */}
        <div className="mb-8 text-center">
          <div className="text-sm text-muted-foreground">Our Team</div>
        </div>
        
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-20">
          {t.team.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Image or Placeholder */}
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/10 shadow-lg hover:border-primary/30 transition-colors duration-300">
                {teamImages[index] ? (
                  <ImageWithFallback
                    src={teamImages[index]}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <User className="w-16 h-16 text-muted-foreground" />
                  </div>
                )}
              </div>
              
              {/* Name */}
              <h3 className="mb-1">{member.name}</h3>
              
              {/* Role */}
              <div className="text-sm text-primary mb-3">{member.role}</div>
              
              {/* Bio */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary rounded-2xl p-8 sm:p-12"
        >
          <div className="text-center mb-8">
            <div className="mb-2 text-xs text-muted-foreground">{t.contactInfo.sectionTitle}</div>
            <h2 className="mb-4 text-xl sm:text-2xl">
              {t.contactInfo.heading}
            </h2>
          </div>

          {/* Contact Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {/* Email */}
            <motion.a
              href={`mailto:${t.contactInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 p-3 bg-background rounded-md hover:shadow-sm transition-shadow duration-300 group"
            >
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Mail className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-muted-foreground mb-0.5">Email</div>
                <div className="truncate text-[11px]">{t.contactInfo.email}</div>
              </div>
            </motion.a>

            {/* Website */}
            <motion.a
              href={`https://${t.contactInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 p-3 bg-background rounded-md hover:shadow-sm transition-shadow duration-300 group"
            >
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Globe className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-muted-foreground mb-0.5">Website</div>
                <div className="truncate text-[11px]">{t.contactInfo.website}</div>
              </div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href={`https://instagram.com/${t.contactInfo.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 p-3 bg-background rounded-md hover:shadow-sm transition-shadow duration-300 group"
            >
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Instagram className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-muted-foreground mb-0.5">Instagram</div>
                <div className="truncate text-[11px]">{t.contactInfo.instagram}</div>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 p-3 bg-background rounded-md hover:shadow-sm transition-shadow duration-300 group"
            >
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Linkedin className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-muted-foreground mb-0.5">LinkedIn</div>
                <div className="truncate text-[11px]">{t.contactInfo.linkedin}</div>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Feedback Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 bg-secondary rounded-2xl p-8 sm:p-12"
        >
          <div className="text-center mb-6">
            <div className="mb-2 text-xs text-muted-foreground">{t.feedback.sectionTitle}</div>
            <h2 className="mb-2 text-xl sm:text-2xl">
              {t.feedback.heading}
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              {t.feedback.description}
            </p>
          </div>

          <form onSubmit={handleFeedbackSubmit} className="max-w-2xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder={t.feedback.namePlaceholder}
                value={feedbackForm.name}
                onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                className="bg-background text-sm h-9"
              />
              <Input
                type="email"
                placeholder={t.feedback.emailPlaceholder}
                value={feedbackForm.email}
                onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                className="bg-background text-sm h-9"
              />
            </div>
            
            <Textarea
              placeholder={t.feedback.messagePlaceholder}
              value={feedbackForm.message}
              onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
              className="bg-background text-sm min-h-[100px] resize-none"
              required
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="gap-2 text-sm h-9 px-6"
              >
                <MessageSquare className="w-4 h-4" />
                {isSubmitting ? "Sending..." : t.feedback.submitButton}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
