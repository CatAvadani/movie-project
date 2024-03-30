import Image from "next/image";

export default function LoginPage() {
  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <Image
        src='https://rb.gy/p2hphi'
        layout='fill'
        alt='img'
        className='-z-10 !hidden opacity-60 sm:!inline'
        objectFit='cover'
      />
      <form action=''>
        <h1>Sign In</h1>
        <div className='relative mt-24 space-y-8 rounded bg-black py-10 px6 md:mt-0 md:max-w-md md:px14'>
          <label>
            <input type='email' placeholder='Email' />
          </label>
          <label>
            <input type='password' placeholder='Password' />
          </label>
        </div>
      </form>
    </div>
  );
}
