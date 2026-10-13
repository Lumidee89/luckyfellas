<?php

use App\Http\Controllers\GalleryImageController;
use App\Models\GalleryImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $gallery = GalleryImage::latest()
        ->take(9)
        ->get()
        ->map(fn (GalleryImage $image) => [
            'id' => $image->id,
            'title' => $image->title,
            'caption' => $image->caption,
            'url' => asset('storage/'.$image->path),
        ]);

    return Inertia::render('Home', [
        'gallery' => $gallery,
        'club' => [
            'name' => 'Luckyfellas Football Club',
            'profileTitle' => 'Football Academy Profile',
            'location' => 'Plot B293 Kuchiko Relocation Estate Layout, Bwari, Abuja, Nigeria',
            'email' => 'info@luckyfellasfc.org',
            'phone' => '+234 807 774 4241',
        ],
    ]);
})->name('home');

Route::get('/admin/login', function () {
    return Inertia::render('Admin/Login');
})->name('admin.login');

Route::post('/admin/login', function (Request $request) {
    $validated = $request->validate([
        'password' => ['required', 'string'],
    ]);

    if ($validated['password'] !== env('ADMIN_PASSWORD', 'luckyfellas')) {
        return back()->withErrors(['password' => 'The admin password is incorrect.']);
    }

    $request->session()->put('is_admin', true);

    return redirect()->route('admin.gallery.index');
})->name('admin.login.store');

Route::post('/admin/logout', function (Request $request) {
    $request->session()->forget('is_admin');

    return redirect()->route('home');
})->name('admin.logout');

Route::middleware('admin.session')->prefix('admin')->name('admin.')->group(function () {
    Route::get('/gallery', [GalleryImageController::class, 'index'])->name('gallery.index');
    Route::post('/gallery', [GalleryImageController::class, 'store'])->name('gallery.store');
    Route::delete('/gallery/{galleryImage}', [GalleryImageController::class, 'destroy'])->name('gallery.destroy');
});
