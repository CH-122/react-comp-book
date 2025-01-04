import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

const LoadLazyPage = lazy(() => import('../views/loadLazyPage/loadLazyPage'))
const ObserverPage = lazy(() => import('../views/observer/observer'))
const Distance = lazy(() => import('../views/distance/distance'))
const UseGesturePage = lazy(() => import('../views/useGesturePage/useGesturePage'))
const TransitionGroup = lazy(() => import('../views/transitionGroup/transitionGroup'))
const ColorPickerPage = lazy(() => import('../views/colorPickerPage/colorPickerPage'))
const routes = [
  {
    path: '/',
    element: <Navigate to="/observer" />,
  },
  {
    path: '/observer',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ObserverPage />
      </Suspense>
    ),
  },
  {
    path: '/loadLazyPage',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LoadLazyPage />
      </Suspense>
    ),
  },
  {
    path: '/distance',
    element: <Distance />,
  },
  {
    path: '/useGesture',
    element: <UseGesturePage />,
  },
  {
    path: '/transitionGroup',
    element: <TransitionGroup />,
  },
  {
    path: '/colorPicker',
    element: <ColorPickerPage />,
  },
]

export default routes
