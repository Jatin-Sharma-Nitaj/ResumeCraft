import React from 'react'
import Header from './components/Custom/Header'
import { Button } from "@/components/ui/button"
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { Toaster } from './components/ui/sonner'
import { ResumeProvider } from './Context/ResumeContext'


const App = () => {
  const { user, isLoaded, isSignedIn } = useUser()
  if (!isSignedIn && isLoaded) {
    return <Navigate to={'/auth/sign-in'} />
  }
  return (
    <>
    <ResumeProvider>
      <Header />
      <Outlet />
      <Toaster />
      </ResumeProvider>
    </>
  )
}

export default App
// import React from 'react';
// import Header from './components/Custom/Header';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useUser } from '@clerk/clerk-react';
// import { Toaster } from './components/ui/sonner';
// import { ResumeProvider } from './context/ResumeContext'; //  import the context

// const App = () => {
//   const { user, isLoaded, isSignedIn } = useUser();

//   if (!isLoaded) return null;
//   if (!isSignedIn) return <Navigate to='/auth/sign-in' />;

//   return (
//     <ResumeProvider>
//       <Header />
//       <Outlet />
//       <Toaster />
//     </ResumeProvider>
//   );
// };

// export default App;
