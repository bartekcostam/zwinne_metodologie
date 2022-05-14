import { Input } from 'components/Input'
import { HiAtSymbol } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Button } from 'components/Button'

export default function Register() {
  // const test = useQuery('categories', '/api/test')
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="p-6 max-w-sm w-full m-6 rounded-2xl bg-white shadow-2xl">
        <Input placeholder="Email" type="email" icon={HiAtSymbol} />
        <Input placeholder="Hasło" type="password" icon={RiLockPasswordLine} />
        <Button type="submit" block>
          Logowanie
        </Button>
      </form>
    </div>
  )
}
