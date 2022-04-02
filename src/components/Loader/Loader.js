import React from "react";

const Loader = () => {
  return (
    <div className="flex gap-8 container mx-auto my-12">
      <div class="shadow rounded-md p-8 max-w-sm w-full">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-300 h-16 w-16"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-3 bg-slate-300 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-3 bg-slate-300 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shadow rounded-md p-8 max-w-sm w-full">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-300 h-16 w-16"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-3 bg-slate-300 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-3 bg-slate-300 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shadow rounded-md p-8 max-w-sm w-full">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-300 h-16 w-16"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-3 bg-slate-300 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-3 bg-slate-300 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shadow rounded-md p-8 max-w-sm w-full">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-300 h-16 w-16"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-3 bg-slate-300 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-3 bg-slate-300 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
