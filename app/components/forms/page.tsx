"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput } from "@/components/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { NativeSelect } from "@/components/ui/native-select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from "@/components/ui/combobox"

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

export default function FormsPage() {
  const [sliderValue, setSliderValue] = React.useState([40])
  const [switchValue, setSwitchValue] = React.useState(false)

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Form Inputs</h1>
        <p className="mt-1 text-muted-foreground">A comprehensive set of form controls for building accessible forms.</p>
      </div>

      <Section title="Text Input" description="A single-line text field.">
        <div className="grid grid-cols-2 gap-4 max-w-lg">
          <div className="space-y-1.5">
            <Label>Default</Label>
            <Input placeholder="Enter text..." />
          </div>
          <div className="space-y-1.5">
            <Label>With value</Label>
            <Input defaultValue="john@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label>Disabled</Label>
            <Input placeholder="Disabled" disabled />
          </div>
          <div className="space-y-1.5">
            <Label>Invalid</Label>
            <Input aria-invalid placeholder="Invalid input" />
          </div>
        </div>
      </Section>

      <Section title="Input Group" description="Inputs with prefix or suffix addons.">
        <div className="flex flex-col gap-3 max-w-xs">
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="example.com" />
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Price" type="number" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>USD</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="username" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </Section>

      <Section title="Textarea" description="A multi-line text input field.">
        <div className="grid grid-cols-2 gap-4 max-w-lg">
          <div className="space-y-1.5">
            <Label>Default</Label>
            <Textarea placeholder="Write your message here..." />
          </div>
          <div className="space-y-1.5">
            <Label>Disabled</Label>
            <Textarea placeholder="Disabled textarea" disabled />
          </div>
        </div>
      </Section>

      <Section title="Select" description="A dropdown list of options.">
        <div className="grid grid-cols-2 gap-4 max-w-lg">
          <div className="space-y-1.5">
            <Label>Radix Select</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Native Select</Label>
            <NativeSelect>
              <option value="">Select timezone</option>
              <option value="utc">UTC</option>
              <option value="est">Eastern</option>
              <option value="pst">Pacific</option>
            </NativeSelect>
          </div>
        </div>
      </Section>

      <Section title="Combobox" description="Searchable select with autocomplete.">
        <div className="max-w-xs space-y-1.5">
          <Label>Framework</Label>
          <Combobox>
            <ComboboxInput placeholder="Select framework..." />
            <ComboboxContent>
              <ComboboxList>
                {["Next.js", "React", "Vue", "Svelte", "Astro"].map((fw) => (
                  <ComboboxItem key={fw} value={fw.toLowerCase().replace(".", "")}>{fw}</ComboboxItem>
                ))}
              </ComboboxList>
              <ComboboxEmpty>No framework found.</ComboboxEmpty>
            </ComboboxContent>
          </Combobox>
        </div>
      </Section>

      <Section title="Checkbox" description="A control to select one or multiple items.">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="default-checked" defaultChecked />
            <Label htmlFor="default-checked">Checked by default</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-check" disabled />
            <Label htmlFor="disabled-check" className="text-muted-foreground">Disabled checkbox</Label>
          </div>
        </div>
      </Section>

      <Section title="Radio Group" description="A set of checkable buttons where only one can be checked.">
        <RadioGroup defaultValue="option-1" className="space-y-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-1" id="r1" />
            <Label htmlFor="r1">Option One</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-2" id="r2" />
            <Label htmlFor="r2">Option Two</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-3" id="r3" disabled />
            <Label htmlFor="r3" className="text-muted-foreground">Option Three (disabled)</Label>
          </div>
        </RadioGroup>
      </Section>

      <Section title="Switch" description="A control that toggles between two states.">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Switch checked={switchValue} onCheckedChange={setSwitchValue} id="switch-1" />
            <Label htmlFor="switch-1">Notifications {switchValue ? "on" : "off"}</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch defaultChecked id="switch-2" />
            <Label htmlFor="switch-2">Email updates</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch disabled id="switch-3" />
            <Label htmlFor="switch-3" className="text-muted-foreground">Disabled switch</Label>
          </div>
        </div>
      </Section>

      <Section title="Slider" description="An input that allows selecting a value within a range.">
        <div className="max-w-xs space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <Label>Volume</Label>
              <span className="text-muted-foreground">{sliderValue[0]}%</span>
            </div>
            <Slider
              min={0}
              max={100}
              step={1}
              value={sliderValue}
              onValueChange={setSliderValue}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm">Disabled</Label>
            <Slider min={0} max={100} defaultValue={[60]} disabled />
          </div>
        </div>
      </Section>

      <Section title="OTP Input" description="One-time password input with segmented fields.">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>6-digit code</Label>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      </Section>

      <Section title="Complete Form Example" description="A sign-up form combining multiple inputs.">
        <form className="max-w-sm space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>First Name</Label>
              <Input placeholder="John" />
            </div>
            <div className="space-y-1.5">
              <Label>Last Name</Label>
              <Input placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Email</Label>
            <Input type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-1.5">
            <Label>Role</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dev">Developer</SelectItem>
                <SelectItem value="design">Designer</SelectItem>
                <SelectItem value="pm">Product Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Bio</Label>
            <Textarea placeholder="Tell us about yourself..." />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="form-terms" />
            <Label htmlFor="form-terms" className="text-sm">I agree to the terms of service</Label>
          </div>
          <Button type="submit" className="w-full">Create Account</Button>
        </form>
      </Section>
    </div>
  )
}
