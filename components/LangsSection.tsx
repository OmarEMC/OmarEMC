import Title from '@/components/Title'
import LangCard from '@/components/LangCard'
import { languages, Language } from '@/utils/static-data'

function LangsSection ({ category }: Pick<Language, 'category'>) {
  return (
    <section className="mt-4">
      <Title id={`${category}-skills`} className="text-4xl opacity-90 no-underline capitalize">{category}</Title>
      <div className="flex flex-wrap gap-4">
        {languages.filter((lang) => lang.category === category).map((lang) => (
          <LangCard lang={lang} key={lang.name} />
        ))}
      </div>
    </section>
  )
}

export default LangsSection
