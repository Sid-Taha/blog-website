'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { InboxIcon as EnvelopeIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react'
import Link from 'next/link'
import { sendEmail } from '@/utils/emailService';

export default function ContactForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Taha Ahmed",
      from_name: name,
      from_email: email,
      message: message
    };

    try {
      await sendEmail(templateParams);
      alert("Email sent successfully");
      setName('');
      setEmail('');
      setMessage('');
    }
    catch (error) {
      console.error('EmailJs Error', error);
      alert("Failed to send email");
    }
  }

  const [selectedInterest, setSelectedInterest] = useState('ui/ux')

  const interests = [
    { id: 'ui/ux', label: 'UI/UX design' },
    { id: 'web', label: 'Web design' },
    { id: 'graphic', label: 'Graphic design' },
    { id: 'system', label: 'Design system' },
    { id: 'other', label: 'Other' }
  ]

  return (
    <div className="min-h-screen bg-[#2E0249] flex items-center justify-center p-4">
      <div className="w-full max-w-[862px] min-h-[613px] bg-[#2E0249] rounded-[14px] relative flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="p-10 text-[#EEEEEE] lg:w-1/2">
          <h1 className="text-2xl md:text-[28px] font-bold leading-tight mb-16">
            Let&apos;s discuss on something <span className="text-[#A91079]">cool</span> together
          </h1>

          <div className="space-y-4 mb-16">
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-4 h-4 text-[#A91079]" />
              <span className="text-sm">SaulDesign@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 bg-[rgba(87,10,87,0.5)] border border-[#A91079] p-4 rounded-lg">
              <PhoneIcon className="w-4 h-4 text-[#A91079]" />
              <span className="text-sm">+123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-4 h-4 text-[#A91079]" />
              <span className="text-sm">123 Street 456 House</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="https://www.facebook.com/" target='_blank' className="w-10 h-10 bg-[#A91079] rounded-full flex items-center justify-center">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/" target='_blank' className="w-10 h-10 bg-[#A91079] rounded-full flex items-center justify-center">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#EEEEEE] rounded-[14px] p-8 lg:w-1/2">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-[#2E0249] font-medium mb-4">I&apos;m interested in...</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest.id}
                    onClick={() => setSelectedInterest(interest.id)}
                    className={`px-4 py-2 text-xs font-medium rounded ${selectedInterest === interest.id
                        ? 'bg-[#A91079] text-white'
                        : 'border border-[rgba(46,2,73,0.3)] text-[rgba(46,2,73,0.3)]'
                      }`}
                  >
                    {interest.label}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="space-y-1">
                  <Input
                    placeholder="Your name"
                    className="border-0 border-b-2 border-[#A91079] rounded-none px-0 focus-visible:ring-0"
                    name='name' value={name} onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="border-0 border-b-2 border-[rgba(46,2,73,0.3)] rounded-none px-0 focus-visible:ring-0"
                    name='email' value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Textarea
                    placeholder="Your message"
                    className="border-0 border-b-2 border-[rgba(46,2,73,0.3)] rounded-none px-0 focus-visible:ring-0 min-h-[100px] resize-none"
                    name='message' value={message} onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>


                <Button type='submit' className="bg-[#A91079] hover:bg-[#A91079]/90 text-white mt-14">
                  <SendIcon className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

