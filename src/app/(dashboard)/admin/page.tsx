'use client'

import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from 'sonner'

type Report = {
  id: string
  reportedId: string
  reporterId: string
  reason: string
  createdAt: Date
  reported: {
    name: string
    avatarUrl?: string
  }
  reporter: {
    name: string
    avatarUrl?: string
  }
}

// Mock data
const mockReports: Report[] = [
  {
    id: "1",
    reportedId: "user1",
    reporterId: "user2",
    reason: "Inappropriate behavior and harassment in chat messages",
    createdAt: new Date("2024-05-15"),
    reported: {
      name: "John Doe",
      avatarUrl: "https://github.com/shadcn.png",
    },
    reporter: {
      name: "Jane Smith",
      avatarUrl: "https://github.com/shadcn.png",
    },
  },
  {
    id: "2",
    reportedId: "user3",
    reporterId: "user4",
    reason: "Spam content and fake profile information. Multiple instances reported.",
    createdAt: new Date("2024-05-14"),
    reported: {
      name: "Mike Johnson",
      avatarUrl: "https://github.com/shadcn.png",
    },
    reporter: {
      name: "Sarah Wilson",
      avatarUrl: "https://github.com/shadcn.png",
    },
  },
  {
    id: "3",
    reportedId: "user5",
    reporterId: "user6",
    reason: "Threatening messages and inappropriate content sharing",
    createdAt: new Date("2024-05-13"),
    reported: {
      name: "Alex Brown",
      avatarUrl: "https://github.com/shadcn.png",
    },
    reporter: {
      name: "Emily Davis",
      avatarUrl: "https://github.com/shadcn.png",
    },
  },
]

export default function Admin() {
  const [reports, setReports] = useState<Report[]>([])
  const [selectedReport, setSelectedReport] = useState<Report | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Load mock data on component mount
    setReports(mockReports)
  }, [])

  async function handleDeleteUser(userId: string) {
    try {
      setIsLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setReports(reports.filter(report => report.reportedId !== userId))
      setIsDialogOpen(false)
    } catch (error) {
      console.error('Error deleting user:', error)
      toast.error('Error deleting user')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleDismissReport(reportId: string) {
    try {
      setIsLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setReports(reports.filter(report => report.id !== reportId))
      setIsDialogOpen(false)
    } catch (error) {
      console.error('Error dismissing report:', error)
      toast.error('Error dismissing report')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">User Reports</h1>
          <p className="text-muted-foreground mt-2">
            Review and manage reported users and their violations.
          </p>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Reported User</TableHead>
                <TableHead className="w-[200px]">Reported By</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead className="w-[150px]">Date</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={report.reported.avatarUrl} />
                        <AvatarFallback>{report.reported.name[0]}</AvatarFallback>
                      </Avatar>
                      <span>{report.reported.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={report.reporter.avatarUrl} />
                        <AvatarFallback>{report.reporter.name[0]}</AvatarFallback>
                      </Avatar>
                      <span>{report.reporter.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[300px]">
                    <p className="truncate">{report.reason}</p>
                  </TableCell>
                  <TableCell>
                    {format(new Date(report.createdAt), 'MMM d, yyyy')}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setSelectedReport(report)
                        setIsDialogOpen(true)
                      }}
                    >
                      Review
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {selectedReport && (
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Review Report</DialogTitle>
                <DialogDescription>
                  Review the report details and take appropriate action.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Reported User</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <Avatar>
                      <AvatarImage src={selectedReport.reported.avatarUrl} />
                      <AvatarFallback>{selectedReport.reported.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{selectedReport.reported.name}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Reported By</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <Avatar>
                      <AvatarImage src={selectedReport.reporter.avatarUrl} />
                      <AvatarFallback>{selectedReport.reporter.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{selectedReport.reporter.name}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Reason</h3>
                  <p className="mt-1">{selectedReport.reason}</p>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Date Reported</h3>
                  <p className="mt-1">{format(new Date(selectedReport.createdAt), 'PPpp')}</p>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => handleDismissReport(selectedReport.id)}
                    disabled={isLoading}
                  >
                    Dismiss Report
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDeleteUser(selectedReport.reportedId)}
                    disabled={isLoading}
                  >
                    Delete User
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </div>
  )
}