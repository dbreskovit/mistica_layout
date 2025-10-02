import { BrandLoadingScreen } from '@telefonica/mistica'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoadingScreenProps {
  redirectTo: string
  title?: string
  description?: string
}

export function LoadingScreen({
  redirectTo,
  title = 'Carregando...',
  description = 'Por favor, aguarde.',
}: LoadingScreenProps) {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectTo)
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate, redirectTo])

  return (
    <BrandLoadingScreen 
      title={title} 
      description={description}
    />
  )
}