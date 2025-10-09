'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';
import { Notification } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ToastProps {
  notification: Notification | null;
  onClose: () => void;
}

const iconMap = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const colorMap = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
};

export default function Toast({ notification, onClose }: ToastProps) {
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        onClose();
      }, notification.duration || 4000);

      return () => clearTimeout(timer);
    }
  }, [notification, onClose]);

  if (!notification) return null;

  const Icon = iconMap[notification.type];

  return (
    <div className="fixed top-4 right-4 z-[100]">
      <AnimatePresence>
        <motion.div
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white max-w-sm",
            colorMap[notification.type]
          )}
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <Icon size={20} />
          <div className="flex-1">
            <p className="font-medium text-sm">{notification.title}</p>
            {notification.message && (
              <p className="text-sm opacity-90 mt-1">{notification.message}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
