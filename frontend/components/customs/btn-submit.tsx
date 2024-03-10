import { FieldValues, FormState } from 'react-hook-form'

export function BtnSubmit(props: {
  readonly textBtn: string
  readonly formState: FormState<FieldValues>
  readonly btnColor?: string
}) {
  return (
    <button
      className={props.btnColor ?? 'btn-success'}
      type="submit"
      disabled={props.formState.isSubmitting}
    >
      {props.textBtn}
    </button>
  )
}
