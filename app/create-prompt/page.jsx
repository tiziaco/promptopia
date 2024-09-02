"use client"

import {useState} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@components/Form'

const CreatePrompt = () => {
	const router = useRouter();
	const { data: session } = useSession();

	const [submiting, setSubmitting] = useState(false);
	const [post, setPost] = useState({
		prompt: "",
		tag: "",
	});

	const createPrompt = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		try {
			// Call the API rout
			const response = await fetch('/api/prompt/new', {
				 method: 'POST',
				 body: JSON.stringify({
					userId: session?.user.id,
					prompt: post.prompt,
					tag: post.tag,
				 })
			})
			// Redirect to home page if response 200
			if (response.ok) {
				router.push('/');
			}
		} catch (error) {
			console.log(error)
		} finally {
			setSubmitting(false);
		}
	}

  return (
	<Form 
		type = "Create"
		post = {post}
		setPost = {setPost}
		submiting = {submiting}
		handleSubmit = {createPrompt}
	/>
  )
}

export default CreatePrompt