"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, TrendingUp, Shield } from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Leaf,
      title: "Crop Recommendations",
      description: "Get personalized crop suggestions based on your soil and climate conditions.",
    },
    {
      icon: Users,
      title: "Knowledge Sharing",
      description: "Connect with fellow farmers and share valuable insights and experiences.",
    },
    {
      icon: TrendingUp,
      title: "Market Updates",
      description: "Stay informed about market trends and pricing for better decision making.",
    },
    {
      icon: Shield,
      title: "Pest Management",
      description: "Access expert advice on pest control and crop protection strategies.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          {t("welcome")}
        </h1>
        <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">{t("homeDescription")}</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Farming?</h2>
        <p className="text-muted-foreground mb-6">
          Explore our tools and join thousands of farmers already benefiting from modern agricultural technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/blogs"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Share Knowledge
          </a>
          <a
            href="/consultancy"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Get Recommendations
          </a>
        </div>
      </div>
    </div>
  )
}
