import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next'



interface PropsFieldErrors {
  field: string,
  errors?: any
}

export const FieldErrors : FC<PropsFieldErrors> = ({field, errors}) => {
  return (
    <>
      <div className="fieldError">{errors[field] && errors[field].message}</div>
    </>
  );
}

interface PropsFieldLabel {
  field: string,
  text: string,
  Required?: boolean,
  className?: string
}

export const FieldLabel: FC<PropsFieldLabel> = ({field, text, Required, className = 'label'} ) => {
  const { t } = useTranslation()  
  return (
    <>
      <label htmlFor={field} className={className}>{t(text)} <span>{Required && '*'}</span></label>
    </>
  )
}

interface PropsFieldInput {
  labelText?: string,
  register: UseFormRegister<any>,
  field: string,
  errors?: any,
  Required?: boolean,
  className?: string   
}

export const FieldInput: FC<PropsFieldInput> = ({labelText, Required, register, field, errors,  className = 'field' }) => {
  return (
    <>
        <div className={className}>
          {labelText && <FieldLabel field={field} text={labelText} Required={Required} />}
          <input {...register(field)} />
          <FieldErrors field={field} errors={errors} />          
        </div>    
    </>
  )
}