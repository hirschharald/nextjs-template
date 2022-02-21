import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedTodoData,getAlltodoIds } from '../../lib/todos'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

export default function Todo({
    alltodoData
  }: {
    alltodoData: {
      title: string
    }
  }) {
    return (
      <Layout>
        <Head>
          <title>{alltodoData.title}</title>
        </Head>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>ToDos</h2>
        <ul className={utilStyles.list}>
          {alltodoData.map(({ id,  title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/todos/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {/* <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small> */}
            </li>
          ))}
        </ul>
      </section>
       </Layout>
    )}

    // GetStaticProps
export const  getStaticProps: GetStaticProps = async() => {
    const alltodoData = await getSortedTodoData()
    return {
      props: {
        alltodoData
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    }
}