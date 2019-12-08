import React from 'react';
import { render } from '@testing-library/react';
import Comment from './Comment';
import { IComment } from '../models';

test('renders comment', () => {
  const comment: IComment = {
    id: 1,
    body: "comment body",
    email: "mynewemail@mymail.com",
    favorite: false,
    name: "New Comment by me"
  }
  const { getByText } = render(<Comment comment={comment} addToFavorite={() => {}} />);
  const mail = getByText(/mynewemail@mymail.com/i);
  const name = getByText(/New Comment by me/i);
  const body = getByText(/comment body/i);
  expect(mail).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(body).toBeInTheDocument();
});
