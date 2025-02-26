"use client"

import * as React from "react"
import { Toast, ToastProvider, ToastViewport } from "@radix-ui/react-toast"

export function Toaster() {
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  )
}

export function useToast() {
  const [toasts, setToasts] = React.useState([])

  const toast = React.useCallback(({ title, description, action, ...props }) => {
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: Math.random().toString(), title, description, action, ...props },
    ])
  }, [])

  const dismiss = React.useCallback((id) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))
  }, [])

  return { toast, dismiss, toasts }
}

export { Toast }

