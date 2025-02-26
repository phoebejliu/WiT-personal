import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Award, Users, Lightbulb } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">Women in Technology Awards</h1>
        <p className="text-xl mb-8 text-gray-600">Celebrating excellence and innovation in the tech industry</p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="border-t-4 border-t-primary flex flex-col h-full">
          <CardHeader className="flex-grow">
            <Award className="w-10 h-10 text-primary mb-4" />
            <CardTitle className="text-xl font-bold mb-2">Team Spirit Award</CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Recognizes individuals who foster collaboration and support within their teams, creating a positive and
              inclusive work environment.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-t-4 border-t-primary flex flex-col h-full">
          <CardHeader className="flex-grow">
            <Users className="w-10 h-10 text-primary mb-4" />
            <CardTitle className="text-xl font-bold mb-2">Leadership Excellence Award</CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Honors outstanding leaders who inspire, guide, and empower their teams to achieve exceptional results and
              drive innovation.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-t-4 border-t-primary flex flex-col h-full">
          <CardHeader className="flex-grow">
            <Lightbulb className="w-10 h-10 text-primary mb-4" />
            <CardTitle className="text-xl font-bold mb-2">Innovation Trailblazer Award</CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Celebrates individuals who have made significant contributions to technological advancements and pushed
              the boundaries of innovation.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Recognize Excellence?</h2>
        <p className="text-xl mb-8 text-gray-600">
          Login now to nominate your colleagues for their outstanding achievements.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/login">Login to Nominate</Link>
        </Button>
      </section>
    </div>
  )
}

