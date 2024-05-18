"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { nameof } from "@/lib/utils";
import { CircleCheck, CircleX } from "lucide-react";

const data: DataSubscription[] = [
  {
    id: "m5gr84i9",
    customerName: "HOMES AND MORE",
    subStartDate: "May 8, 2024",
    dueDate: "June 7, 2024",
    dueAmount: 40150,
    billingCycle: 30,
    creditLimit: 0,
    paymentAmount: 0,
    customerStatus: !true,
    service: "Business Dual Play",
    type: 4,
    receivable: 40150,
  },
  {
    id: "3u1reuv4",
    customerName: "EMBASSY OF ISRAEL",
    subStartDate: "May 11, 2024",
    dueDate: "June 10, 2024",
    dueAmount: 509850,
    billingCycle: 30,
    creditLimit: 0,
    paymentAmount: 0,
    customerStatus: true,
    service: "Business Triple Play",
    type: 40,
    receivable: 509850,
  },
  {
    id: "derv1ws0",
    customerName: "BLACK WATER GROUP",
    subStartDate: "May 12, 2024",
    dueDate: "June 11, 2024",
    dueAmount: 40150,
    billingCycle: 30,
    creditLimit: 0,
    paymentAmount: 0,
    customerStatus: true,
    service: "Business Dual Play",
    type: 40,
    receivable: 40150,
  },
  {
    id: "5kma53ae",
    customerName: "K-SALAM CONSTRUCTION COMPANY",
    subStartDate: "May 23, 2024",
    dueDate: "June 22, 2024",
    dueAmount: 113850,
    billingCycle: 30,
    creditLimit: 0,
    paymentAmount: 0,
    customerStatus: true,
    service: "Business Dual Play",
    type: 0,
    receivable: 113850,
  },
];

export type DataSubscription = {
  id: string;
  customerName: string;
  subStartDate: string;
  dueDate: string;
  dueAmount: number;
  billingCycle: number;
  creditLimit: number;
  paymentAmount: number;
  customerStatus: boolean;
  service: string;
  type: number;
  receivable: number;
};

export const columns: ColumnDef<DataSubscription>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: nameof<DataSubscription>("customerName"),
    header: ({ column }) => {
      return (
        <TableColumnButton column={column}>Customer Name</TableColumnButton>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue(nameof<DataSubscription>("customerName"))}
      </div>
    ),
  },
  {
    accessorKey: nameof<DataSubscription>("subStartDate"),
    header: ({ column }) => {
      return (
        <TableColumnButton column={column}>Sub Start Date</TableColumnButton>
      );
    },
    cell: ({ row }) => (
      <div className="">
        {row.getValue(nameof<DataSubscription>("subStartDate"))}
      </div>
    ),
  },
  {
    accessorKey: nameof<DataSubscription>("dueAmount"),
    header: ({ column }) => (
      <TableColumnButton column={column}>Due Amount</TableColumnButton>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">
          {String(
            row.getValue(nameof<DataSubscription>("dueAmount"))
          ).toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: nameof<DataSubscription>("billingCycle"),
    header: ({ column }) => (
      <TableColumnButton column={column}>Billing Cycle</TableColumnButton>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">
          {String(
            row.getValue(nameof<DataSubscription>("billingCycle"))
          ).toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: nameof<DataSubscription>("creditLimit"),
    header: ({ column }) => (
      <TableColumnButton column={column}>Credit Limit</TableColumnButton>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">
          {String(
            row.getValue(nameof<DataSubscription>("creditLimit"))
          ).toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: nameof<DataSubscription>("paymentAmount"),
    header: ({ column }) => (
      <TableColumnButton column={column}>Payment Amount</TableColumnButton>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">
          {String(
            row.getValue(nameof<DataSubscription>("paymentAmount"))
          ).toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: nameof<DataSubscription>("customerStatus"),
    header: ({ column }) => (
      <TableColumnButton column={column}>Customer Status</TableColumnButton>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex justify-center font-medium">
          {row.getValue(nameof<DataSubscription>("customerStatus")) == true ? (
            <CircleCheck width={20} height={20} className="text-green-600" />
          ) : (
            <CircleX width={20} height={20} className="text-red-600" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: nameof<DataSubscription>("service"),
    header: ({ column }) => {
      return <TableColumnButton column={column}>Service</TableColumnButton>;
    },
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue(nameof<DataSubscription>("service"))}
      </div>
    ),
  },
  {
    accessorKey: nameof<DataSubscription>("type"),
    header: ({ column }) => {
      return <TableColumnButton column={column}>Type</TableColumnButton>;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {String(
          row.getValue(nameof<DataSubscription>("type"))
        ).toLocaleString()}
        {"Mbps"}
      </div>
    ),
  },
  {
    accessorKey: nameof<DataSubscription>("receivable"),
    header: ({ column }) => {
      return <TableColumnButton column={column}>Receivable</TableColumnButton>;
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {String(
          row.getValue(nameof<DataSubscription>("receivable"))
        ).toLocaleString()}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
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
      );
    },
  },
];

const TableColumnButton = ({
  column,
  children,
}: {
  column: any;
  children: any;
}) => (
  <Button
    variant="ghost"
    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  >
    {children}
    <CaretSortIcon className="ml-2 h-4 w-4" />
  </Button>
);

const DataTableDemo = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

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
  });

  return (
    <div className="w-full p-4">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter customer..."
          value={
            (table
              .getColumn(nameof<DataSubscription>("customerName"))
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event: { target: { value: any } }) =>
            table
              .getColumn(nameof<DataSubscription>("customerName"))
              ?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
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
                    onCheckedChange={(value: any) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
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
                  );
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
        <div className="flex-1 text-sm text-muted-foreground">
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
  );
};

export default DataTableDemo;
