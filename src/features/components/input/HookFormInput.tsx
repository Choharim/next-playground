import { useForm } from 'react-hook-form'

import Button from '@/components/Button'
import Input from '@/components/Input'

type FormData = {
  title: string
  price: number
}

const HookFormInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Input
        isError={!!errors.title}
        {...register('title', { required: true })}
      />

      <Input
        type="number"
        isError={!!errors.price}
        {...register('price', { required: true, min: 1, max: 10 })}
      />

      <Button type="submit" variety="contain">
        제출
      </Button>
    </form>
  )
}

export default HookFormInput
