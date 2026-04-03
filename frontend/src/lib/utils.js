import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatScore(score) {
  if (typeof score !== 'number') return 'N/A';
  return (score * 100).toFixed(1) + '%';
}

export function getScoreColor(score) {
  if (typeof score !== 'number') return 'text-gray-400';
  if (score >= 0.8) return 'text-emerald-400';
  if (score >= 0.5) return 'text-yellow-400';
  return 'text-red-400';
}

export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '…';
}

export function getFileIcon(fileType) {
  const icons = {
    'pdf': '📄',
    'txt': '📝',
    'csv': '📊',
    'xlsx': '📊',
    'xls': '📊',
    'doc': '📝',
    'docx': '📝'
  };
  return icons[fileType?.toLowerCase()] || '📎';
}

export function formatFileSize(bytes) {
  if (!bytes || bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return size.toFixed(1) + ' ' + units[unitIndex];
}
