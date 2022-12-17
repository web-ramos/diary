import { FC, useEffect, useState } from 'react'
import { IContext } from '../../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { addContext, clearIconSprite } from '../../store/diarySlice'
import { useTranslation } from 'react-i18next'
import { useForm } from "react-hook-form"
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import '../../styles/form.css'
import { FieldInput } from '../Forms/Forms'
import { IconPicker } from '../IconPicker/IconPicker'
import styles from './Context.module.css'
import Icon from '../Icon/Icon'


interface PropsContext {
  context: IContext | null,
  open: boolean
}

const schema = Joi.object({
  id: Joi.any(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  icon: Joi.string()
});

export const EditContext: FC<PropsContext> = ({context, open}) => {

  const { t } = useTranslation()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IContext>({
    resolver: joiResolver(schema),
    defaultValues: {
      id: '',
      icon: 'icon-files'
    },
  });

  useEffect(() => {

  }, [])

  const onSubmit = (data: IContext) => {
    reset();
    dispatch(addContext(data));
  }

  const handlerIconCleaner = () => {
    dispatch(clearIconSprite(true));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('id')}/>
      <input type="hidden" {...register('icon')}/>
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

        <IconPicker />

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
