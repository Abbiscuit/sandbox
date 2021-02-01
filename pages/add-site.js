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

      <Layout title="Add Site" subTitle="site">
        <div className="mt-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-white p-4 sm:p-8 rounded-md shadow-sm"
          >
            <div className="mb-4">
              <label
                htmlFor="siteName"
                className="uppercase text-xs font-medium inline-block mb-1"
              >
                Name
              </label>
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
              <label
                htmlFor="link"
                className="uppercase text-xs font-medium inline-block mb-1"
              >
                Link
              </label>
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
