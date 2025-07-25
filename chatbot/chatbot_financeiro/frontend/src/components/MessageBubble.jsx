import { motion } from 'framer-motion';
import { FaRobot, FaUser } from 'react-icons/fa';

const ChatBubble = ({ sender, text }) => {
  const isUser = sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex items-start gap-2 ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isUser && (
        <FaRobot className="text-blue-600 text-lg mt-1" />
      )}

      <div
        className={`max-w-[80%] px-4 py-2 rounded-xl text-sm ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-900 rounded-bl-none'
        } shadow-md`}
      >
        {text}
      </div>

      {isUser && (
        <FaUser className="text-blue-600 text-lg mt-1" />
      )}
    </motion.div>
  );
};

export default ChatBubble;
