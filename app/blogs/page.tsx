"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

interface BlogEntry {
  id: string
  title: string
  category: "blog" | "news"
  content: string
  createdAt: Date
}

export default function BlogsPage() {
  const { t } = useLanguage()
  const [entries, setEntries] = useState<BlogEntry[]>([])
  const [formData, setFormData] = useState({
    title: "",
    category: "" as "blog" | "news" | "",
    content: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title || !formData.category || !formData.content) return

    const newEntry: BlogEntry = {
      id: Date.now().toString(),
      title: formData.title,
      category: formData.category as "blog" | "news",
      content: formData.content,
      createdAt: new Date(),
    }

    setEntries([newEntry, ...entries])
    handleReset()
  }

  const handleReset = () => {
    setFormData({
      title: "",
      category: "",
      content: "",
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">{t("submitBlog")}</h1>

        {/* Form Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{t("submitBlog")}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title Field */}
                <div className="space-y-2">
                  <Label htmlFor="title">{t("title")}</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder={t("titlePlaceholder")}
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                {/* Category Field */}
                <div className="space-y-2">
                  <Label htmlFor="category">{t("category")}</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value: "blog" | "news") => setFormData({ ...formData, category: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={`${t("category")}...`} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blog">{t("blog")}</SelectItem>
                      <SelectItem value="news">{t("news")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Content Field */}
              <div className="space-y-2">
                <Label htmlFor="content">{t("content")}</Label>
                <Textarea
                  id="content"
                  placeholder={t("contentPlaceholder")}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={6}
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  {t("submit")}
                </Button>
                <Button type="button" variant="outline" onClick={handleReset}>
                  {t("reset")}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Entries Display */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Recent Entries ({entries.length})</h2>

          {entries.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">No entries yet. Submit your first blog or news article above!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {entries.map((entry) => (
                <Card key={entry.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{entry.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>Anonymous User</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(entry.createdAt)}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant={entry.category === "blog" ? "default" : "secondary"} className="shrink-0">
                        {t(entry.category)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{entry.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
