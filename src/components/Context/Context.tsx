import { FC } from 'react'
import { IContext } from '../../types/types'
import { useDispatch } from 'react-redux'
import { addContext } from '../../store/diarySlice'
import { useTranslation } from 'react-i18next'
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import '../../styles/form.css'
import { FieldInput } from '../Forms/Forms'


interface PropsContext {
  context: IContext | null,
  open: boolean
}

const schema = Joi.object({
  id: Joi.any(),
  name: Joi.string().required(),
  description: Joi.string().required()
});

export const EditContext: FC<PropsContext> = ({context, open}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch();  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IContext>({
    resolver: joiResolver(schema),
    defaultValues: {
      id: 'test12345'
    },    
  });

  const onSubmit = (data: IContext) => {
    reset();
    dispatch(addContext({ data }));
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('id')}/>      
      <fieldset className="fieldset">
        <h3 className="legend">{t('Context')}</h3>         
        <FieldInput
          register={register}
          field="name"
          errors={errors}
          labelText="Context Name"
          Required
        />

        <FieldInput
          register={register}
          field="description"
          errors={errors}
          labelText="Context Description"
          Required
        />
       
        <div className="actions">
          <div className="action">
            <button className="button submit" type="submit">{t('Submit')}</button>
          </div>
          <div className="action">
            <button className="button reset" type="reset" onClick={() => reset()}>{t('Reset')}</button>
          </div>          
        </div>
      </fieldset>           
    </form>
  )
}

export const ItemContext = () => {
  return (
    <div>вывести</div>
  )
}
