
"use client"
import type {ColumnDef} from "@tanstack/react-table"
import type {ColumnFiltersState, SortingState, VisibilityState} from "@tanstack/react-table"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Payment[] = [
  {
  id: "194a9454",
  amount: 960,
  status: "processing",
  email: "njohnson@thompson.net",
},
{
  id: "45790aee",
  amount: 120,
  status: "processing",
  email: "mdavis@hayden.com",
},
{
  id: "8cf81019",
  amount: 583,
  status: "success",
  email: "williamsrodney@gmail.com",
},
{
  id: "4247c937",
  amount: 573,
  status: "failed",
  email: "tanya71@bean.info",
},
{
  id: "bcf67950",
  amount: 206,
  status: "failed",
  email: "millerlarry@hess.com",
},
{
  id: "be9fc621",
  amount: 275,
  status: "failed",
  email: "samuel43@rivera-spears.com",
},
{
  id: "9d2d2dee",
  amount: 351,
  status: "processing",
  email: "sarahjacobs@salazar-james.com",
},
{
  id: "4c1ee7d1",
  amount: 884,
  status: "processing",
  email: "along@yahoo.com",
},
{
  id: "73914b15",
  amount: 463,
  status: "success",
  email: "jameselizabeth@fry.com",
},
{
  id: "d1e14a29",
  amount: 394,
  status: "processing",
  email: "seanshelton@greene.info",
},
{
  id: "bd3cd785",
  amount: 694,
  status: "processing",
  email: "pwilson@becker-lewis.biz",
},
{
  id: "b83c7e8a",
  amount: 942,
  status: "success",
  email: "christina83@johnson.com",
},
{
  id: "1d15ac12",
  amount: 139,
  status: "success",
  email: "patricia42@hotmail.com",
},
{
  id: "e05f1621",
  amount: 625,
  status: "success",
  email: "marymartin@guerra.info",
},
{
  id: "d8b51108",
  amount: 311,
  status: "processing",
  email: "kyledavis@rodriguez-sutton.net",
},
{
  id: "d1a96a93",
  amount: 568,
  status: "success",
  email: "nmiller@gmail.com",
},
{
  id: "78c68d2b",
  amount: 194,
  status: "success",
  email: "juananderson@hester.com",
},
{
  id: "309ed405",
  amount: 360,
  status: "success",
  email: "sethjennings@norris-alexander.com",
},
{
  id: "e3ba0d55",
  amount: 287,
  status: "success",
  email: "adamsjacob@hotmail.com",
},
{
  id: "ca0c9a44",
  amount: 875,
  status: "failed",
  email: "anthony55@gill.com",
},
{
  id: "f10474b2",
  amount: 569,
  status: "success",
  email: "aimee96@hotmail.com",
},
{
  id: "394af3f3",
  amount: 953,
  status: "processing",
  email: "nicole46@gmail.com",
},
{
  id: "f33b231e",
  amount: 304,
  status: "success",
  email: "alexandrarodriguez@johnson.com",
},
{
  id: "a26d126d",
  amount: 625,
  status: "processing",
  email: "lindsey02@nixon.com",
},
{
  id: "233cc083",
  amount: 723,
  status: "success",
  email: "sarah89@gmail.com",
},
{
  id: "0c0ba288",
  amount: 898,
  status: "failed",
  email: "paulchen@yahoo.com",
},
{
  id: "ed00d4fa",
  amount: 410,
  status: "failed",
  email: "sharon93@ford.org",
},
{
  id: "c9c019b3",
  amount: 424,
  status: "processing",
  email: "rodgersjonathan@gmail.com",
},
{
  id: "bfaf9b34",
  amount: 985,
  status: "processing",
  email: "sullivankrista@hotmail.com",
},
{
  id: "505e3c3d",
  amount: 407,
  status: "success",
  email: "leetracy@gmail.com",
},
{
  id: "13120550",
  amount: 987,
  status: "processing",
  email: "hunterapril@church-thompson.com",
},
{
  id: "0ba0b5d0",
  amount: 896,
  status: "failed",
  email: "williamlucas@yahoo.com",
},
{
  id: "6ba04e5d",
  amount: 668,
  status: "success",
  email: "darryl77@gmail.com",
},
{
  id: "434dde5e",
  amount: 529,
  status: "failed",
  email: "roger84@sullivan.info",
},
{
  id: "7e0211da",
  amount: 840,
  status: "success",
  email: "roachbrandon@benjamin-moore.com",
},
{
  id: "4dafa42d",
  amount: 986,
  status: "success",
  email: "daviseric@thompson.org",
},
{
  id: "09145c8d",
  amount: 934,
  status: "success",
  email: "johnclark@rodriguez-vincent.net",
},
{
  id: "45cafaac",
  amount: 755,
  status: "processing",
  email: "brittany75@yahoo.com",
},
{
  id: "e26b0801",
  amount: 643,
  status: "processing",
  email: "tpierce@jimenez.biz",
},
{
  id: "de1457d8",
  amount: 322,
  status: "processing",
  email: "robinsonbradley@hale-williamson.com",
},
{
  id: "23a7655d",
  amount: 975,
  status: "failed",
  email: "kylewebb@medina.com",
},
{
  id: "191e1780",
  amount: 281,
  status: "processing",
  email: "david54@king-koch.biz",
},
{
  id: "c1d934b9",
  amount: 895,
  status: "success",
  email: "laguirre@gonzalez.com",
},
{
  id: "4db6fe2e",
  amount: 101,
  status: "failed",
  email: "richardwolfe@simmons.com",
},
{
  id: "48299319",
  amount: 781,
  status: "failed",
  email: "yalvarado@johnson.com",
},
{
  id: "cb67536b",
  amount: 308,
  status: "success",
  email: "llopez@yahoo.com",
},
{
  id: "ee3edfdb",
  amount: 352,
  status: "success",
  email: "matthewbrown@gmail.com",
},
{
  id: "e2f771fd",
  amount: 904,
  status: "success",
  email: "nicolaswillis@mendoza-allen.com",
},
{
  id: "72ced0ef",
  amount: 314,
  status: "success",
  email: "mollycasey@kent.com",
},
{
  id: "10a9b7e1",
  amount: 356,
  status: "success",
  email: "wardbrianna@gmail.com",
},
{
  id: "afc612cc",
  amount: 871,
  status: "failed",
  email: "garciaconnie@vance.com",
},
{
  id: "512cfea5",
  amount: 766,
  status: "failed",
  email: "emily05@yahoo.com",
},
{
  id: "8ad02904",
  amount: 810,
  status: "failed",
  email: "george67@lane.org",
},
{
  id: "c09d90bd",
  amount: 856,
  status: "failed",
  email: "jodiwright@warner-cruz.com",
},
{
  id: "ed3d33ab",
  amount: 772,
  status: "processing",
  email: "andrew85@yahoo.com",
},
{
  id: "b6f83a09",
  amount: 294,
  status: "processing",
  email: "zbarker@doyle.info",
},
{
  id: "c7e5136c",
  amount: 676,
  status: "processing",
  email: "carrie01@mccoy-smith.com",
},
{
  id: "1ed980ae",
  amount: 437,
  status: "processing",
  email: "tfernandez@gmail.com",
},
{
  id: "8d870f02",
  amount: 764,
  status: "success",
  email: "qlarson@gibson.org",
},
{
  id: "8abc2f4c",
  amount: 468,
  status: "failed",
  email: "ryan35@sherman.com",
}

]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
        pagination: {
            pageSize: 6, 
        },
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
