import Head from 'next/head';
import Router from 'next/router';
import { useForm } from 'react-hook-form';

import { useAuth } from '../lib/auth';
import { createSite } from '../lib/db';

import Layout from '../components/Layout';

export default function AddSite() {
  const { reset, register, handleSubmit, errors } = useForm();
  const { user } = useAuth();

  const onSubmit = async data => {
    const newSite = {
      authorId: user.uid,
      createdAt: new Date().toISOString(),
      name: data.siteName,
      link: data.link,
    };

    await createSite(newSite);

    reset();

    await Router.push(`/dashboard`);
  };

  return (
    <>
      <Head>
        <title> Add awesome site! </title>
      </Head>
      <Layout>
        <div className="flex flex-col items-start">
          <div className="text-sm text-gray-600 sm:text-base">Sites</div>
          <h3 className="text-xl font-medium sm:text-4xl sm:font-bold">
            Add Site
          </h3>
        </div>
        <div className="mt-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-white p-4 sm:p-8 rounded-md shadow-sm"
          >
            <div className="mb-4">
              <label htmlFor="siteName">Name</label>
              <input
                className="w-full border rounded-sm px-4 py-2"
                type="text"
                placeholder="My Site"
                name="siteName"
                ref={register({ required: true, minLength: 3 })}
              />
              <p className="text-red-500 text-sm">
                {errors.siteName && '*Site name is required'}
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="link">Link</label>
              <input
                className="w-full border rounded-sm px-4 py-2 "
                type="url"
                placeholder="https://website.com"
                name="link"
                ref={register({ required: true })}
              />
              <p className="text-red-500 text-sm">
                {errors.link && '*Link is required'}
              </p>
            </div>

            <div className="w-full flex justify-end">
              <button
                className="px-4 py-2 bg-gray-100 rounded-md"
                onClick={() => Router.back()}
                type="button"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md ml-4"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}
