import { User } from 'src/pages/members'
import { Avatar } from '@/ui'
import { DateTime } from 'luxon'
import { A } from '@/components'

export default function GoalMeta({
  className = '',
  participants,
  createdAt,
  updatesCount,
}: {
  className?: string
  participants: User[]
  createdAt: DateTime
  updatesCount: number
}) {
  return (
    <aside className={className}>
      <h2 className="sr-only">Details</h2>
      <div className="space-y-5">
        <div className="flex items-center space-x-2">
          <svg
            className="h-5 w-5 text-green-500"
            data-todo-x-description="Heroicon name: solid/lock-open"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"></path>
          </svg>
          <span className="text-green-700 text-sm font-medium">
            Active Goal
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="h-5 w-5 text-gray-400"
            data-todo-x-description="Heroicon name: solid/chat-alt"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900 text-sm font-medium">
            {updatesCount} updates
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="h-5 w-5 text-gray-400"
            data-todo-x-description="Heroicon name: solid/calendar"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900 text-sm font-medium">
            Created on{' '}
            <time dateTime={createdAt.toISO()}>
              {createdAt.toLocaleString(DateTime.DATE_FULL)}
            </time>
          </span>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
        <div>
          <h2 className="text-sm font-medium text-gray-500">Participants</h2>
          <ul className="mt-3 space-y-3">
            {participants.map((participant) => (
              <li className="flex justify-start" key={participant.id}>
                <A
                  href={`/${participant.username}`}
                  className="flex items-end space-x-3"
                >
                  <div className="flex-shrink-0">
                    <Avatar
                      src={participant.image}
                      size="2xs"
                      alt={participant.account?.firstName}
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {participant.account?.firstName ?? participant.name}
                  </div>
                </A>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-500">Tags</h2>
          <ul className="mt-2 leading-8">
            <li className="inline">
              <a className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                <div className="absolute flex-shrink-0 flex items-center justify-center">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-brand-500"
                    aria-hidden="true"
                  ></span>
                </div>
                <div className="ml-3.5 text-sm font-medium text-gray-900">
                  Primary
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
