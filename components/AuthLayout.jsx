import Image from 'next/image';

import backgroundImage1 from '@/images/bg-1.svg';
import backgroundImage2 from '@/images/bg-2.svg';

export function AuthLayout({ children, isData, bg = '1' }) {
  return (
    <>
      <div className='relative flex min-h-full justify-center md:px-12 lg:px-0'>
        <div className='relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28'>
          <div className='mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0'>
            {children}
          </div>
        </div>
        <div className='hidden sm:contents lg:relative lg:block lg:flex-1'>
          {!isData ? (
            <Image
              className={`absolute inset-0 h-full w-full object-cover`}
              src={bg === '1' ? backgroundImage2 : backgroundImage1}
              alt=''
              unoptimized
            />
          ) : (
            <div className='flex h-full flex-col gap-12 overflow-y-scroll bg-blue-100/80 px-12 py-20'>
              <h1 className='font-display text-2xl font-medium underline underline-offset-4'>
                Here's what you need to learn:
              </h1>
              <div>
                <h2 className='font-display text-xl font-medium'>Unit 1</h2>
                <p className='pt-1.5 font-semibold text-slate-800'>
                  Title: Overview of Time Complexity analysis, Divide and
                  Conquer - (6 Hrs)
                </p>
                <p className='pt-1 text-sm text-slate-600'>
                  Introduction to design and analysis of algorithms, Growth of
                  Functions, Asymptotic notations (Big Oh, small oh, Big Omega,
                  Theta notations). Recurrences, Solution of recurrences by
                  substitution, Iteration, recursion tree and Master methods.
                  Priority Queue, Analyzing Quick sort, Merge sort, Heap sort,
                  Lower bounds for sorting.
                </p>
              </div>
              <div>
                <h2 className='font-display text-xl font-medium'>Unit 1</h2>
                <p className='pt-1.5 font-semibold text-slate-800'>
                  Title: Overview of Time Complexity analysis, Divide and
                  Conquer - (6 Hrs)
                </p>
                <p className='pt-1 text-sm text-slate-600'>
                  Introduction to design and analysis of algorithms, Growth of
                  Functions, Asymptotic notations (Big Oh, small oh, Big Omega,
                  Theta notations). Recurrences, Solution of recurrences by
                  substitution, Iteration, recursion tree and Master methods.
                  Priority Queue, Analyzing Quick sort, Merge sort, Heap sort,
                  Lower bounds for sorting.
                </p>
              </div>
              <div>
                <h2 className='font-display text-xl font-medium'>Unit 1</h2>
                <p className='pt-1.5 font-semibold text-slate-800'>
                  Title: Overview of Time Complexity analysis, Divide and
                  Conquer - (6 Hrs)
                </p>
                <p className='pt-1 text-sm text-slate-600'>
                  Introduction to design and analysis of algorithms, Growth of
                  Functions, Asymptotic notations (Big Oh, small oh, Big Omega,
                  Theta notations). Recurrences, Solution of recurrences by
                  substitution, Iteration, recursion tree and Master methods.
                  Priority Queue, Analyzing Quick sort, Merge sort, Heap sort,
                  Lower bounds for sorting.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
