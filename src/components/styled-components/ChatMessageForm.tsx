import React from 'react';
import styled from 'styled-components';

const ChatMessageForm = ({ publishAfterGetRoomId, handleChange, chat }: any) => {
  return (
    <StyledForm onSubmit={(event) => publishAfterGetRoomId(event, chat)}>
      <textarea onChange={handleChange} value={chat} />
      <button type='submit'>전송</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  position: sticky;
  bottom: 0;

  textarea {
    flex-grow: 1;
    padding: 0.5rem;
    font-size: 1.1rem;
    border: 1px solid #ececec;
    border-radius: 5px;
    outline: none;
    white-space: pre-wrap;
    height: 50px;
    resize: none; /* 크기 조절 불가능하게 설정 */
  }

  button[type='submit'] {
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    color: var(--color-btn);
    background-color: var(--background-btn);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      filter: brightness(0.8);
    }

    &:focus {
      outline: none;
    }
  }
`;

export default ChatMessageForm;
