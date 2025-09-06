import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Twitter, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { insertContactMessageSchema, type InsertContactMessage } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Code, href: "https://leetcode.com", label: "LeetCode" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="contact-title">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">Let's discuss opportunities and collaboration</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-6" data-testid="contact-info">
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="text-xl text-blue-500 mr-4" />
                  <span className="text-muted-foreground">rajesh.chouhan@example.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone className="text-xl text-green-500 mr-4" />
                  <span className="text-muted-foreground">+91 9876543210</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="text-xl text-red-500 mr-4" />
                  <span className="text-muted-foreground">Jabalpur, Madhya Pradesh, India</span>
                </motion.div>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6" data-testid="social-links">
              <h3 className="text-2xl font-bold mb-6 text-primary">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      data-testid={`social-${link.label.toLowerCase()}`}
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={form.handleSubmit(onSubmit)}
              className="glass rounded-2xl p-6"
              data-testid="contact-form"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Send Message</h3>
              <div className="space-y-4">
                <motion.input
                  {...form.register('name')}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  data-testid="input-name"
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
                )}
                
                <motion.input
                  {...form.register('email')}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>
                )}
                
                <motion.input
                  {...form.register('subject')}
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  data-testid="input-subject"
                />
                {form.formState.errors.subject && (
                  <p className="text-destructive text-sm">{form.formState.errors.subject.message}</p>
                )}
                
                <motion.textarea
                  {...form.register('message')}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  whileFocus={{ scale: 1.02 }}
                  data-testid="textarea-message"
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm">{form.formState.errors.message.message}</p>
                )}
                
                <motion.button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-send-message"
                >
                  <Send className="inline mr-2" size={16} />
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
