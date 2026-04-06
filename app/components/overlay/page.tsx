"use client"

import * as React from "react"
import { AlertCircle, Bell, ChevronDown, Info, Pencil, Settings, Trash2, User } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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

export default function OverlayPage() {
  return (
    <TooltipProvider>
      <div className="mx-auto max-w-4xl px-6 py-10 space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Overlay & Dialogs</h1>
          <p className="mt-1 text-muted-foreground">Components that render above the main content.</p>
        </div>

        <Section title="Dialog" description="A modal window that appears in front of the page content.">
          <div className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-1.5">
                    <Label>Name</Label>
                    <Input defaultValue="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Email</Label>
                    <Input defaultValue="john@example.com" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Small Dialog</Button>
              </DialogTrigger>
              <DialogContent className="max-w-sm">
                <DialogHeader>
                  <DialogTitle>Confirm Action</DialogTitle>
                  <DialogDescription>Are you sure you want to proceed?</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Section>

        <Section title="Alert Dialog" description="A modal dialog that interrupts the user with important content.">
          <div className="flex flex-wrap gap-3">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Confirm Action</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Save Changes?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You have unsaved changes. Would you like to save them before leaving?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Discard</AlertDialogCancel>
                  <AlertDialogAction>Save</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </Section>

        <Section title="Sheet" description="A dialog that slides in from the edge of the screen.">
          <div className="flex flex-wrap gap-3">
            {(["right", "left", "top", "bottom"] as const).map((side) => (
              <Sheet key={side}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="capitalize">{side}</Button>
                </SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader>
                    <SheetTitle>Sheet from {side}</SheetTitle>
                    <SheetDescription>
                      This is a sheet that slides in from the {side} of the screen.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-3">
                    <div className="space-y-1.5">
                      <Label>Name</Label>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="space-y-1.5">
                      <Label>Email</Label>
                      <Input placeholder="Your email" type="email" />
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button>Save</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </Section>

        <Section title="Drawer" description="A panel that slides up from the bottom of the screen.">
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Share Profile</DrawerTitle>
                <DrawerDescription>Share your profile with others</DrawerDescription>
              </DrawerHeader>
              <div className="px-4 pb-4 space-y-3">
                <div className="space-y-1.5">
                  <Label>Profile Link</Label>
                  <Input defaultValue="https://example.com/profile/johndoe" readOnly />
                </div>
              </div>
              <DrawerFooter>
                <Button>Copy Link</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Section>

        <Section title="Popover" description="Displays rich content in a floating container, triggered by a button.">
          <div className="flex flex-wrap gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Dimensions</h4>
                  <div className="space-y-2">
                    {["Width", "Height", "Margin"].map((label) => (
                      <div key={label} className="grid grid-cols-3 items-center gap-4">
                        <Label className="text-right text-xs">{label}</Label>
                        <Input defaultValue="100%" className="col-span-2 h-8" />
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <Bell className="size-4" />
                  Notifications
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Notifications</p>
                  {["New comment on your post", "User mentioned you", "Server deployment done"].map((n) => (
                    <div key={n} className="flex gap-2 text-sm py-1 border-b last:border-0">
                      <div className="size-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      {n}
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </Section>

        <Section title="Dropdown Menu" description="Displays a menu to the user—such as a set of actions or functions.">
          <div className="flex flex-wrap gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Options
                  <ChevronDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><User className="size-4 mr-2" />Profile</DropdownMenuItem>
                <DropdownMenuItem><Settings className="size-4 mr-2" />Settings</DropdownMenuItem>
                <DropdownMenuItem><Bell className="size-4 mr-2" />Notifications</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="size-4 mr-2" />
                  Delete Account
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="md" iconOnly variant="ghost"><Pencil className="size-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Archive</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Section>

        <Section title="Tooltip" description="A popup that displays information related to an element on hover.">
          <div className="flex flex-wrap gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>This is a tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="md" iconOnly variant="ghost"><Info className="size-4" /></Button>
              </TooltipTrigger>
              <TooltipContent>More information</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="md" iconOnly variant="ghost"><AlertCircle className="size-4" /></Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Warning: This action cannot be undone</TooltipContent>
            </Tooltip>
          </div>
        </Section>

        <Section title="Hover Card" description="For sighted users to preview content available behind a link.">
          <div className="flex gap-3">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost">@shadcn</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="flex gap-3">
                  <div className="size-10 rounded-full bg-muted flex items-center justify-center font-medium text-sm">SC</div>
                  <div>
                    <h4 className="text-sm font-semibold">@shadcn</h4>
                    <p className="text-xs text-muted-foreground">Building @shadcn/ui — a beautifully designed component library.</p>
                    <p className="text-xs text-muted-foreground mt-1">Joined December 2021</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </Section>

        <Section title="Context Menu" description="Displays a menu to the user—triggered by right-clicking.">
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <Card className="cursor-context-menu select-none">
                <CardHeader>
                  <CardTitle className="text-sm">Right-click anywhere here</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Try right-clicking on this card to see the context menu.</p>
                </CardContent>
              </Card>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem><Pencil className="size-4 mr-2" />Edit</ContextMenuItem>
              <ContextMenuItem>Duplicate</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Copy <ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
              <ContextMenuItem>Paste <ContextMenuShortcut>⌘V</ContextMenuShortcut></ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem className="text-destructive">
                <Trash2 className="size-4 mr-2" />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Section>
      </div>
    </TooltipProvider>
  )
}
