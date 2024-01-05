import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from '@phosphor-icons/react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({
  content,
  onDeleteComment,
}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  return (
    <>
      <div className={styles.comment}>
        <Avatar
          hasBorder={false}
          src="https://github.com/ezequielbrilhantedev.png"
          alt="Foto Avatar"
        />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Ezequiel Brilhante</strong>
                <time
                  title="16 de Dezembro às 13:19"
                  dateTime="20223-12-16 13:19:00"
                >
                  Cerca de 1h atrás
                </time>
              </div>

              <button
                onClick={handleDeleteComment}
                title="Deletar comentário"
              >
                <Trash size={24} />
              </button>
            </header>
            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
