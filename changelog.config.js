module.exports = {
  disableEmoji: false,
  format: '{type}: {emoji}{subject}',
  list: ['test', 'add', 'fix', 'remove', 'docs', 'clean', 'style', 'ci', 'update'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'subject'],
  scopes: [],
  types: {
    remove: {
      description: '削除（ファイル、コードの一部）',
      emoji: '🔥',
      value: 'remove',
    },
    ci: {
      description: 'CI関連の追加、変更',
      emoji: '🤖',
      value: 'ci',
    },
    docs: {
      description: 'ドキュメントの更新',
      emoji: '✏️',
      value: 'docs',
    },
    add: {
      description: '新規（ファイル）機能追加',
      emoji: '✨',
      value: 'add',
    },
    fix: {
      description: 'バグ修正',
      emoji: '🐛',
      value: 'fix',
    },
    update: {
      description: '機能修正（バグではない）',
      emoji: '⚡️',
      value: 'update',
    },
    clean: {
      description: '整理（リファクタリング等）',
      emoji: '♻',
      value: 'clean',
    },
    style: {
      description: 'UIなどのstyle追加、変更',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'テストコードの追加、変更',
      emoji: '🧪',
      value: 'test',
    },
  },
}
