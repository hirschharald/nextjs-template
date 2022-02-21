import Layout from '../../components/layout'
import { getAlltodoIds, getTodoData } from '../../lib/todos'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Todo({
  todoData
}: {
    todoData: {
    title: string
    completed: boolean
    userId:number
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{todoData.title}</title>
      </Head>
      <h1>ToDo</h1>
      <article>
        <h2 className={utilStyles.headingXl}>{todoData.title}</h2>
        
      </article>
      <p>Status: {todoData.completed?'completed':'pending'}</p>
    </Layout>
  )
}
//
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAlltodoIds()
  return {
    paths,
    fallback: false
  }
}
//
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const todoData = await getTodoData(params.id as string)
  return {
    props: {
      todoData
    }
  }
}
