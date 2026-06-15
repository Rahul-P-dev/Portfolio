
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "a9db5bc7-66f5-4c92-a320-2222b9d3d96e",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `Portfolio Contact from ${formData.name}`,
      }),
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed to send message.");
      console.log(result);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  
 };
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResumeDownload = () => {
    // Create a dummy PDF download - in real implementation, you'd link to your actual resume
    const link = document.createElement('a');
    link.href = '/Rahul-resume.pdf'; 
    link.download = 'Rahul_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Create</span> Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project and create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="floating-animation">
              <h3 className="text-2xl font-semibold mb-4 text-white">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in new opportunities, creative projects, and innovative challenges. 
                Whether you're a startup looking to build from scratch or an established company seeking 
                to modernize your digital presence, I'd love to hear from you.
              </p>
            </div>

            {/* Resume Download Button */}
            <div className="floating-animation resume-download-container" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={handleResumeDownload}
                className="resume-download-btn group relative w-full max-w-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative glass-card p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="resume-icon-container">
                      <Download className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors duration-300" />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">
                        Download Resume
                      </p>
                      <p className="text-gray-400 text-sm group-hover:text-purple-400 transition-colors duration-300">
                        View my experience & skills
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            <div className="space-y-6">
              {/* Email Box */}
              <div className="floating-animation contact-box-transparent email-box-transparent p-6 rounded-lg" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center glow-effect">
                    <span className="text-white font-bold text-xl">@</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-lg">Email</p>
                    <p className="gradient-text-purple font-semibold">rahulgohul007@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Phone Box */}
              <div className="floating-animation contact-box-transparent phone-box-transparent p-6 rounded-lg" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center glow-effect">
                    <span className="text-white font-bold text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-lg">Phone</p>
                    <p className="gradient-text-orange font-semibold">+91 84288 53461</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="card-gradient p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="floating-animation">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-500 transition-all duration-300 hover:border-purple-400 h-14 text-lg"
                  required
                />
              </div>

              <div className="floating-animation" style={{ animationDelay: '0.2s' }}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-500 transition-all duration-300 hover:border-purple-400 h-14 text-lg"
                  required
                />
              </div>

              <div className="floating-animation" style={{ animationDelay: '0.4s' }}>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-500 transition-all duration-300 resize-none hover:border-purple-400 text-lg p-4"
                  required
                />
              </div>

              <div className="floating-animation" style={{ animationDelay: '0.6s' }}>
                <button
                  type="submit"
                  className="btn-sharp w-full animate-pulse-glow h-14 text-lg"
                >
                  Get In Touch
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
