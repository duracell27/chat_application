const MyMessage = ({ message }) => {
	if (message?.attachments?.length > 0) {
		return (
			<img
				src={message.attachments[0].file}
				alt={'message-attachment'}
				className={'message-image'}
				style={{ float: 'right' }}
			/>
		)
	}

	return (
		<div style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3b2a50', padding: '10px' }}>
			{message.text}
		</div>
	)
}

export default MyMessage