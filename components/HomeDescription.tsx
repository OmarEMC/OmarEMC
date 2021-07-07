import useTranslation from 'next-translate/useTranslation'

function HomeDescription () {
  const { t, lang } = useTranslation('common')

  return (
    <div className="font-semibold text-xl sm:text-2xl my-2">
      {lang === 'es' && (
        <span className="inline-block first-letter:uppercase">
          {t('developer')}
        </span>
      )}
      <h2 className="inline text-primary-400 text-2xl sm:text-4xl">Frontend</h2>
      {t('and')}
      <h2 className="inline text-primary-500 text-2xl sm:text-4xl">Backend</h2>
      {lang === 'en' && (
        <span className="inline-block sm:inline">
          {t('developer')}
        </span>
      )}.
      <hr />
    </div>
  )
}

export default HomeDescription
