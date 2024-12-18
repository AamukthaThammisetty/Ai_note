'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect } from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import { api } from '@/convex/_generated/api'
import { useMutation } from 'convex/react'
export default function Home() {
  const { user } = useUser()
  const createUser = useMutation(api.user.createUser)
  useEffect(() => {
    user && CheckUser()
  }, [user])

  const CheckUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
      userName: user?.fullName,
    })
    console.log(result)
  }
  return (
    <div>
      <Button>Subscribe</Button>
      <UserButton />
    </div>
  )
}
