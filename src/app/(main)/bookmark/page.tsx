import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth'
import React from 'react'
import ListFav from './components/ListFav';

type userSession = {
  user: {
    name: string;
    email: string;
    image: string;
    id: string;
    cart: string;
    rol: string;
    bookmark: string;
  }
}
const page = async () => {
  const session: userSession | null = await getServerSession(authOptions);
  const bookmark = session?.user.bookmark;

  return (
    <section className='bookmark'>
      <ListFav bookmarkId={bookmark} />

    </section>
  )
}

export default page