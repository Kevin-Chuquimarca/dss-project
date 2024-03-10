import { getUserRole } from '@/app/actions'

export default async function Layout({
  admin,
  students,
  params,
}: {
  readonly admin: React.ReactNode
  readonly students: React.ReactNode
  readonly params: { idBanner: string }
}) {
  const role = await getUserRole(params.idBanner)

  return <>{role === 'ROLE_USER' ? students : admin}</>
}
