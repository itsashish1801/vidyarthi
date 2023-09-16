import Head from 'next/head';
import Link from 'next/link';

import { AuthLayout } from '@/components/AuthLayout';
import { Button } from '@/components/Button';
import { SelectField, TextField } from '@/components/Fields';
import { Logo } from '@/components/Logo';

export default function Register() {
  return (
    <>
      <Head>
        <title>Sign Up - Vidyarthi</title>
      </Head>
      <AuthLayout isData={true}>
        <div className='flex flex-col'>
          <Link href='/' aria-label='Home'>
            <Logo className='h-8 w-auto' />
          </Link>
          <div className='mt-20'>
            <h2 className='text-lg font-semibold text-slate-900'>
              Get your curriculum
            </h2>
            <p className='mt-2 text-sm text-slate-700'>
              Just fill out the required details and we'll do the rest.
            </p>
          </div>
        </div>
        <form
          action='#'
          className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2'
        >
          <SelectField
            className='col-span-full'
            label='Choose your stream'
            id='referral_source'
            name='referral_source'
          >
            <option>Computer Science and Engineering</option>
            <option>Electrical Engineering</option>
            <option>Civil Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Aeronautics Engineering</option>
            <option>Chemical Engineering</option>
            <option>Biotechnology Engineering</option>
          </SelectField>

          <SelectField
            className='col-span-full'
            label='Choose your specialisation'
            id='referral_source'
            name='referral_source'
          >
            <option>Artificial Intelligence</option>
            <option>Machine Learning</option>
            <option>System Design</option>
            <option>Software Architecture</option>
            <option>Database Management</option>
          </SelectField>

          <div className='col-span-full'>
            <Button
              type='submit'
              variant='solid'
              color='blue'
              className='w-full'
            >
              <span>
                Get your curriculum <span aria-hidden='true'>&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}
