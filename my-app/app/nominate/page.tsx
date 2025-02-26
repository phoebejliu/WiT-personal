"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { useAuth } from "@/contexts/AuthContext"
import { useToast } from "@/components/ui/use-toast"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function NominatePage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    nominee: "",
    awardType: "",
    reason: "",
  })
  const { isLoggedIn } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
      toast({
        title: "Access Denied",
        description: "Please login to access the nomination form.",
      })
    }
  }, [isLoggedIn, router, toast])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, awardType: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (formData.nominee && formData.awardType && formData.reason) {
      // Here you would typically send the nomination data to your backend
      setShowSuccessModal(true)
    } else {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all fields before submitting.",
      })
    }
  }

  const resetForm = () => {
    setFormData({
      nominee: "",
      awardType: "",
      reason: "",
    })
  }

  const handleNominateAnother = () => {
    setShowSuccessModal(false)
    resetForm()
  }

  if (!isLoggedIn) {
    return null // or a loading spinner
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Nominate a Colleague</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary">Nomination Form</CardTitle>
          <CardDescription>Fill out the details to nominate someone for a WiT Award</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nominee">Nominee Name</Label>
              <Input
                id="nominee"
                name="nominee"
                placeholder="Enter nominee's name"
                value={formData.nominee}
                onChange={handleInputChange}
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="award-type">Award Type</Label>
              <Select onValueChange={handleSelectChange} value={formData.awardType}>
                <SelectTrigger id="award-type" className="border-gray-300">
                  <SelectValue placeholder="Select an award" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="team-spirit">Team Spirit Award</SelectItem>
                  <SelectItem value="leadership">Leadership Excellence Award</SelectItem>
                  <SelectItem value="innovation">Innovation Trailblazer Award</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Nomination (max 300 characters)</Label>
              <Textarea
                id="reason"
                name="reason"
                placeholder="Enter your reason for nomination"
                maxLength={300}
                value={formData.reason}
                onChange={handleInputChange}
                className="border-gray-300"
              />
              <div className="mt-4 space-y-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Good example</h3>
                      <p className="mt-2 text-sm text-green-700">
                        "Jane consistently demonstrates exceptional leadership by mentoring junior team members,
                        fostering a collaborative environment, and driving innovative solutions that have significantly
                        improved our project outcomes. Her ability to inspire and guide the team has been instrumental
                        in our recent successes."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Bad example</h3>
                      <p className="mt-2 text-sm text-red-700">"She's a good worker and deserves an award."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Submit Nomination
            </Button>
          </form>
        </CardContent>
      </Card>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">Nomination Submitted</DialogTitle>
            <DialogDescription>
              Your nomination has been successfully recorded. Thank you for participating in the WiT Awards!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <Button
              onClick={handleNominateAnother}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Nominate Another Person
            </Button>
            <Button onClick={() => setShowSuccessModal(false)} className="bg-primary hover:bg-primary/90">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

