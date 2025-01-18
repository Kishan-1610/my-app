'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitName } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  )
}

export default function NameForm() {
  const [greeting, setGreeting] = useState<string>('')

  async function handleSubmit(formData: FormData) {
    const result = await submitName(formData)
    setGreeting(result)
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Enter Your Name</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <Input type="text" name="name" placeholder="Your name" required />
          <SubmitButton />
        </form>
        {greeting && <p className="mt-4 text-lg">{greeting}</p>}
      </CardContent>
    </Card>
  )
}

