import Title from '@/components/Title'
import Divider from '@/components/Divider'
import LangCard from '@/components/LangCard'
import { languages, Language } from '@/utils/static-data'

function LangsSection ({ category }: Pick<Language, 'category'>) {
  return (
    <section className="mt-4">
      <Title id={`${category}-skills`} className="text-5xl no-underline -mb-2 capitalize">{category}</Title>
      <Divider />
      <div className="grid gap-4 lg:grid-cols-2 ">
        {languages.filter((lang) => lang.category === category).map((lang) => (
          <LangCard lang={lang} key={lang.name} />
        ))}
      </div>
    </section>
  )
}

export default LangsSection
