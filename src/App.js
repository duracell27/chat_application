import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'

const App = () => {
	return (
		<ChatEngine
			height='100vh'
			projectID='44c52f24-0088-4beb-942e-f4548675ffd7'
			userName='shmidt'
			userSecret='123123'
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	)
}

export default App
