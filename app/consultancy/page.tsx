"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Mail,
  MapPin,
  Layers,
  DollarSign,
  Wheat,
  Cloud,
  Bug,
  TrendingUp,
  Droplets,
  Thermometer,
} from "lucide-react"

export default function ConsultancyPage() {
  const { t } = useLanguage()

  // Mock user data
  const userData = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    state: "Punjab",
    soilType: "Alluvial Soil",
    budget: "₹50,000",
  }

  // Mock crop recommendation
  const cropRecommendation = {
    crop: "Wheat",
    variety: "HD-2967",
    expectedYield: "45-50 quintals/hectare",
    sowingTime: "November - December",
    harvestTime: "April - May",
    profitability: "High",
  }

  // Mock daily updates
  const dailyUpdates = {
    weather: {
      temperature: "22°C",
      humidity: "65%",
      rainfall: "0mm",
      forecast: "Partly cloudy with mild temperatures",
    },
    pestTips: [
      "Monitor for aphids in wheat crops during this season",
      "Apply neem oil spray if pest infestation is detected",
      "Check for rust disease symptoms on leaves",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">{t("consultancy")}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Information Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {t("userInfo")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">{t("name")}</p>
                  <p className="font-medium">{userData.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">{t("email")}</p>
                  <p className="font-medium">{userData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">{t("state")}</p>
                  <p className="font-medium">{userData.state}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Layers className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">{t("soilType")}</p>
                  <p className="font-medium">{userData.soilType}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">{t("budget")}</p>
                  <p className="font-medium">{userData.budget}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Crop Recommendation Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wheat className="h-5 w-5" />
                {t("recommendedCrop")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Crop</p>
                    <p className="text-2xl font-bold text-green-600">{cropRecommendation.crop}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Variety</p>
                    <p className="font-medium">{cropRecommendation.variety}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Expected Yield</p>
                    <p className="font-medium">{cropRecommendation.expectedYield}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Sowing Time</p>
                    <p className="font-medium">{cropRecommendation.sowingTime}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Harvest Time</p>
                    <p className="font-medium">{cropRecommendation.harvestTime}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Profitability</p>
                    <Badge
                      variant="default"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                    >
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {cropRecommendation.profitability}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Daily Updates Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">{t("dailyUpdates")}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Weather Update */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5" />
                  {t("weather")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Thermometer className="h-6 w-6 mx-auto mb-2 text-orange-500" />
                    <p className="text-sm text-muted-foreground">Temperature</p>
                    <p className="font-bold">{dailyUpdates.weather.temperature}</p>
                  </div>

                  <div className="text-center">
                    <Droplets className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                    <p className="text-sm text-muted-foreground">Humidity</p>
                    <p className="font-bold">{dailyUpdates.weather.humidity}</p>
                  </div>

                  <div className="text-center">
                    <Cloud className="h-6 w-6 mx-auto mb-2 text-gray-500" />
                    <p className="text-sm text-muted-foreground">Rainfall</p>
                    <p className="font-bold">{dailyUpdates.weather.rainfall}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground mb-1">Forecast</p>
                  <p className="text-sm">{dailyUpdates.weather.forecast}</p>
                </div>
              </CardContent>
            </Card>

            {/* Pest Management Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="h-5 w-5" />
                  {t("pestTips")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {dailyUpdates.pestTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <p className="text-sm leading-relaxed">{tip}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <Card className="mt-6">
          <CardContent className="text-center py-8">
            <h3 className="text-lg font-semibold mb-2">Need More Personalized Advice?</h3>
            <p className="text-muted-foreground mb-4">
              Connect with our agricultural experts for detailed consultation and customized farming solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Schedule Consultation
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                Download Report
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
