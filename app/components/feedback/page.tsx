"use client"

import * as React from "react"
import { Terminal, AlertCircle, CheckCircle, Info, XCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Empty, EmptyTitle, EmptyDescription, EmptyMedia } from "@/components/ui/empty"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner"

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <div>
        <h2 className="text-base font-semibold">{title}</h2>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="rounded-xl border bg-card p-6">
        {children}
      </div>
    </section>
  )
}

export default function FeedbackPage() {
  const [uploadProgress, setUploadProgress] = React.useState(0)
  const [isUploading, setIsUploading] = React.useState(false)

  function simulateUpload() {
    setIsUploading(true)
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          toast.success("Upload complete!", { description: "Your file has been uploaded." })
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Feedback</h1>
        <p className="mt-1 text-muted-foreground">Components for communicating status and providing feedback to users.</p>
      </div>

      <Section title="Alert" description="Displays important messages to users.">
        <div className="space-y-3 max-w-lg">
          <Alert>
            <Terminal className="size-4" />
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the CLI.
            </AlertDescription>
          </Alert>
          <Alert variant="error">
            <XCircle className="size-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again to continue.
            </AlertDescription>
          </Alert>
          <Alert className="border-blue-500/50 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20">
            <Info className="size-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              A new software update is available. Download and install it to get the latest features.
            </AlertDescription>
          </Alert>
          <Alert className="border-green-500/50 text-green-600 dark:text-green-400 bg-green-50/50 dark:bg-green-950/20">
            <CheckCircle className="size-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your profile has been updated successfully.
            </AlertDescription>
          </Alert>
          <Alert className="border-yellow-500/50 text-yellow-600 dark:text-yellow-400 bg-yellow-50/50 dark:bg-yellow-950/20">
            <AlertCircle className="size-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Your account storage is 90% full. Consider upgrading your plan.
            </AlertDescription>
          </Alert>
        </div>
      </Section>

      <Section title="Toast / Sonner" description="Notifications that appear on the screen.">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => toast("Default notification", { description: "This is a default toast message." })}>
            Default Toast
          </Button>
          <Button variant="outline" onClick={() => toast.success("Success!", { description: "Operation completed successfully." })}>
            Success Toast
          </Button>
          <Button variant="outline" onClick={() => toast.error("Error!", { description: "Something went wrong. Please try again." })}>
            Error Toast
          </Button>
          <Button variant="outline" onClick={() => toast.warning("Warning", { description: "Please review before proceeding." })}>
            Warning Toast
          </Button>
          <Button variant="outline" onClick={() => toast.info("Info", { description: "Here is some helpful information." })}>
            Info Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("Event Created", {
                description: "Monday, January 3rd at 6:00pm",
                action: { label: "Undo", onClick: () => toast.info("Undone!") },
              })
            }
          >
            Toast with Action
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              const id = toast.loading("Uploading...")
              setTimeout(() => toast.success("Uploaded!", { id }), 2000)
            }}
          >
            Loading Toast
          </Button>
        </div>
      </Section>

      <Section title="Progress" description="Show task completion progress.">
        <div className="max-w-sm space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Storage Used</span>
              <span className="text-muted-foreground">72%</span>
            </div>
            <Progress value={72} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Upload Progress</span>
              <span className="text-muted-foreground">{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} />
            <Button size="sm" onClick={simulateUpload} disabled={isUploading}>
              {isUploading ? "Uploading..." : "Simulate Upload"}
            </Button>
          </div>
        </div>
      </Section>

      <Section title="Spinner" description="Loading indicator for asynchronous operations.">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-3" />
            <span className="text-xs text-muted-foreground">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-4" />
            <span className="text-xs text-muted-foreground">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner className="size-6" />
            <span className="text-xs text-muted-foreground">Large</span>
          </div>
          <div className="flex items-center gap-2">
            <Spinner className="size-4" />
            <span className="text-sm">Loading data...</span>
          </div>
          <Button disabled>
            <Spinner className="size-4" />
            Processing
          </Button>
        </div>
      </Section>

      <Section title="Skeleton" description="Placeholder for content that is loading.">
        <div className="space-y-6">
          <div>
            <p className="text-xs text-muted-foreground mb-3">Profile skeleton</p>
            <div className="flex items-center gap-4">
              <Skeleton className="size-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3">Article skeleton</p>
            <div className="space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3">Card grid skeleton</p>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-xl border p-4 space-y-3">
                  <Skeleton className="h-24 w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Empty State" description="Shown when there is no content to display.">
        <div className="max-w-sm mx-auto">
          <Empty className="border">
            <EmptyMedia variant="icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </EmptyMedia>
            <EmptyTitle>No results found</EmptyTitle>
            <EmptyDescription>
              Try adjusting your search or filter to find what you&apos;re looking for.
            </EmptyDescription>
            <Button size="sm">Clear Filters</Button>
          </Empty>
        </div>
      </Section>
    </div>
  )
}
